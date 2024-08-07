import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import cl from "./Table.module.scss";
import CustomPagination from "./CustomPagination";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { choiseRepository } from "../../Store/Actions/repositories";
import { useDispatch } from "react-redux";
import moment from "moment";

const TableRepository: React.FC = () => {
  const [partArray, setPartArray] = useState<any>([]);
  const dispatch = useDispatch();
  const [arrowRotate, setArrowRotate] = useState<number>(0);
  const repositories: any = useSelector(
    (state: any) => state.repositories.value
  );
  let step: any = useSelector((state: any) => state.repositories.step);
  let count: any = useSelector((state: any) => state.repositories.count);

  useEffect(() => {
    let array: any = [];

    for (let i = step; i < step + count; i++) {
      array.push(repositories[i]);
    }
    setPartArray(array);
  }, [step, count]);

  const sortColumnByName = () => {
    let newArray = partArray?.sort((a: any, b: any) => {
      let nameA = a.full_name;
      let nameB = b.full_name;
  
      if (arrowRotate !== 0) {
        nameA = b.full_name;
        nameB = a.full_name;
      }

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
    setPartArray(newArray);
    arrowRotate === 0 ? setArrowRotate(-180) : setArrowRotate(0);
  };

  const selectRow = (id: any) => {
    let select = repositories.filter((item: any) => item.id === id);
    dispatch(choiseRepository(select[0]));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: 912,
        maxHeight: 640,
        margin: "20px",
        boxShadow: "unset",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        color="#000"
        sx={{ textAlign: "left", boxShadow: "unset" }}
      >
        Результаты поиска
      </Typography>
      <Table sx={{ minwWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <IconButton
                aria-label="move up"
                size="small"
                onClick={sortColumnByName}
              >
                <ArrowUpwardIcon
                  className={cl.Arrow}
                  style={{ transform: `rotate(${arrowRotate}deg)` }}
                />
              </IconButton>
              Название
            </TableCell>
            <TableCell align="right">Язык</TableCell>
            <TableCell align="right">Число форков</TableCell>
            <TableCell align="right">Число звезд</TableCell>
            <TableCell align="right">Дата обновления</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories &&
            partArray.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => selectRow(row.id)}
              >
                <TableCell component="th" scope="row">
                  {row.full_name}
                </TableCell>
                <TableCell align="right">{row.language}</TableCell>
                <TableCell align="right">{row.forks}</TableCell>
                <TableCell align="right">{row.stargazers_count}</TableCell>
                <TableCell align="right">{`${moment(row.updated_at).format(
                  "YYYY-MM-DD"
                )}`}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        {repositories && <CustomPagination />}
      </Table>
    </TableContainer>
  );
};

export default TableRepository;
