import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./global.css";
import { Movies } from "./components";

const roots = ReactDOM.createRoot(document.getElementById("root")!);

roots.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movies/>}/>
    </Routes>
  </BrowserRouter>
);