import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./global.css";

const roots = ReactDOM.createRoot(document.getElementById("root")!);

roots.render(
  <BrowserRouter>
    <Routes>
      <Route path="/movies" element={<App/>}/>
    </Routes>
  </BrowserRouter>
);
