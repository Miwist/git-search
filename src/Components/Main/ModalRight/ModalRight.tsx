import { Box, Typography, Chip, Stack } from "@mui/material";
import React from "react";
import cl from "./ModalRight.module.scss";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";

const ModalRight: React.FC = () => {
  const repository = useSelector((state: any) => state.repositories.selected);

  return (
    <Box
      className={cl.Modal}
      sx={{
        alignItems: repository ? "flex-start" : "center",
        justifyContent: repository ? "flex-start" : "center",
      }}
    >
      {!repository ? (
        <Typography variant="h6" align="center" gutterBottom>
          Выберите репозиторий
        </Typography>
      ) : (
      <Box>
        <Typography variant="h4" align="center" gutterBottom>
          {repository.full_name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <Stack spacing={1} alignItems="start">
            <Stack direction="row" spacing={1}>
              {repository && <Chip label={repository.language} color="primary" />}
            </Stack>
            <Stack direction="row" spacing={1}>
              <Chip label="Python" color="default" variant="outlined" />
              <Chip label="Cli" color="default" variant="outlined" />
              <Chip label="ARV" color="default" variant="outlined" />
              <Chip label="data" color="default" variant="outlined" />
            </Stack>
          </Stack>
          <Box
            sx={{
              marginLeft: "20%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <StarIcon
              sx={{ color: "#FFB400", width: "20px", height: "20px" }}
            />
            <Typography sx={{ marginLeft: "10px" }}>{repository.forks}</Typography>
          </Box>
        </Box>
        <Typography>GPL-3.0 license</Typography>
      </Box>
      )} 
    </Box>
  );
};

export default ModalRight;
