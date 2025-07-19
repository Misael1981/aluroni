import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Inicio from "./pages/Inicio";
import Cardapio from "./pages/Cardapio";
import Sobre from "./pages/Sobre";
import HeroSection from "./components/HeroSection";
import NotFound from "./pages/NotFound";
import Prato from "./pages/Prato";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HeroSection />}>
          <Route index element={<Inicio />} />
          <Route path="cardapio" element={<Cardapio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="prato/:id" element={<Prato />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
