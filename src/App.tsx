import React from "react";
import "./Style/index.scss";
import Box from "@mui/material/Box";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./Components/Store";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Box className="App">
        <Header />
        <Main />
        <Footer />
      </Box>
    </Provider>
  );
};

export default App;
