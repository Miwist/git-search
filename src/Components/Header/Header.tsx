import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import cl from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { updateInput } from "../Store/Actions/input";
import {
  updateRepositories,
  loadingRepository,
} from "../Store/Actions/repositories";
import Alert from "@mui/material/Alert";
import axios from "axios";

const Header = () => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const dispatch = useDispatch();

  const sendInput = () => {
    const clearStatus = () => {
      setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 3000);
    };

    if (text.length > 0) {
      dispatch(updateInput(text));
      dispatch(loadingRepository(true));
      setText("");

      axios
        .get(`https://api.github.com/search/repositories?q=language:${text}`)
        .then((res) => {
          if (res) {
            setError(false);
            setSuccess(true);
            console.log(res.data.items);
            dispatch(updateRepositories(res.data.items));
            dispatch(loadingRepository(false));
            clearStatus();
          }
        })
        .catch((e) => {
          setError(true);
          dispatch(loadingRepository(false));
          clearStatus();
          console.log(e);
          return;
        });
    }
  };

  return (
    <header className={cl.Header}>
      <Box className={cl.Search}>
        <TextField
          variant="outlined"
          value={text}
          placeholder="Введите поисковый запрос"
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" onClick={sendInput}>
          Искать
        </Button>

        {error && (
          <Alert severity="error">Неверный запрос, попробуйте еще</Alert>
        )}
        {success && <Alert severity="success">Данные успешно получены</Alert>}
      </Box>
    </header>
  );
};

export default Header;
