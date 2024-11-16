import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Intro from "./pages/water/Intro.jsx";
import Video from "./components/Video.jsx";
import Water from "./pages/Water.jsx";
import Tips from "./components/Tips.jsx";
import Quiz from "./pages/Quiz.jsx";
import Agriculture from "./pages/Agriculture.jsx";
import IntroAgro from "./pages/agriculture/Intro.jsx";
import AgroHome from "./pages/agriculture/AgroHome.jsx";
import WaterTipsPage from "./pages/water/WaterTips.jsx";
import AgroTipsPage from "./pages/agriculture/AgroTips.jsx";
import AgroVideo from "./pages/agriculture/AgroVideo.jsx";
import WaterVideo from "./pages/water/WaterVideo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Hackaton-CPDI-ODS">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="water" element={<Water />}>
            <Route index path="intro" element={<Intro />} />

            <Route path="video" element={<WaterVideo />} />

            <Route path="tips" element={<WaterTipsPage />} />
          </Route>

          <Route path="agriculture" element={<Agriculture />}>
            <Route index path="home" element={<AgroHome />} />
            <Route path="intro" element={<IntroAgro />} />

            <Route path="video" element={<AgroVideo />} />

            <Route path="tips" element={<AgroTipsPage />} />

            <Route path="quiz" element={<Quiz />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
