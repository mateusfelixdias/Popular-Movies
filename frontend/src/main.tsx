import ReactDOM from "react-dom/client";
import { MoviesPopulares } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./global.css";

const roots = ReactDOM.createRoot(document.getElementById("root")!);

roots.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MoviesPopulares/>}/>
    </Routes>
  </BrowserRouter>
);