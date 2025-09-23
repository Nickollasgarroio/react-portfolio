import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import CurriculumPage from "@/pages/curriculum";
import AboutPage from "@/pages/about";
import CartaAoRecutradorPage from "@/pages/cartaAoRecrutador";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<CurriculumPage />} path="/curriculum" />
      <Route element={<CartaAoRecutradorPage />} path="/recruiter" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;
