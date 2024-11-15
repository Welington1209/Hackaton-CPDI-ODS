import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/water/Intro.jsx";
import Video from "./pages/water/Video.jsx";
import Water from "./pages/Water.jsx";
import Tips from "./pages/water/Tips.jsx";
import Quiz from "./pages/Quiz.jsx";
import Agriculture from "./pages/Agriculture.jsx";
import IntroAgro from "./pages/agriculture/Intro.jsx";
import AgroHome from "./pages/agriculture/AgroHome.jsx";
import WaterTipsPage from "./pages/water/WaterTips.jsx";
import AgroTipsPage from "./pages/agriculture/AgroTips.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Hackaton-CPDI-ODS" element={<App />}>
          <Route index element={<Home />} />

          <Route path="water" element={<Water />}>
            <Route index path="intro" element={<Intro />} />

            <Route path="video" element={<Video />} />

            <Route path="tips" element={<WaterTipsPage />} />
          </Route>

          <Route path="agriculture" element={<Agriculture />}>
            <Route index path="home" element={<AgroHome />} />
            <Route path="intro" element={<IntroAgro />} />

            <Route path="tips" element={<AgroTipsPage />} />

            <Route path="quiz" element={<Quiz />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
