import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "../Components/Nav";


const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
  );
};

export default App;
