import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "../Components/Nav";
import Detail from "./Detail/Detail";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Project4 from "./Projects/Project4";
import Project5 from "./Projects/Project5";

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/1" element={<Project1 />} />
          <Route path="/project/2" element={<Project2 />} />          
          <Route path="/project/3" element={<Project3 />} />
          <Route path="/project/4" element={<Project4 />} />
          <Route path="/project/5" element={<Project5 />} />

        </Routes>
  );
};

export default App;
