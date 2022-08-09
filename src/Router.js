import Home from "./components/ContentSide/Home/Home";
import Skills from "./components/ContentSide/Skills/Skills";
import Application from "./components/ContentSide/Application/Application";
import Advisor from "./components/ContentSide/AdvisorReport/Advisor";
import Photography from "./components/ContentSide/Photography/Photography";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function Router() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Advisor" element={<Advisor />} />
        <Route path="/Photography" element={<Photography />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
