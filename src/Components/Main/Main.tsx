import React from "react";
import cl from "./Main.module.scss";
import { Typography } from "@mui/material";
import TableRepository from "./Table/TableRepository";
import { useSelector } from "react-redux";
import ModalRight from "./ModalRight/ModalRight";
import CircularProgress from "@mui/material/CircularProgress";

const Main: React.FC = () => {
  const reposValue = useSelector((state: any) => state.repositories.value);
  const loading = useSelector((state: any) => state.repositories.loading);

  return (
    <main
      className={cl.Main}
      style={{
        alignItems: reposValue.length ? "flex-start" : "center",
        justifyContent: reposValue.length ? "flex-start" : "center",
      }}
    >
      {reposValue.length ? (
        <>
          <TableRepository />
          <ModalRight />
        </>
      ) : (
        <Typography variant="h2" align="center" gutterBottom>
          {loading ? <CircularProgress color="success" /> : "Добро пожаловать"}
        </Typography>
      )}
    </main>
  );
};

export default Main;
