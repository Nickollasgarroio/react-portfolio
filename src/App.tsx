// import { Route, Routes } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import IndexPage from "@/pages/index";

import CurriculumPage from "@/pages/curriculum";
import AboutPage from "@/pages/about";
import CartaAoRecutradorPage from "@/pages/cartaAoRecrutador";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<CurriculumPage />} path="/curriculum" />
      <Route element={<CartaAoRecutradorPage />} path="/recruiter" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;
