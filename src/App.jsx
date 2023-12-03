import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components/index";
import { Home, Skills, Portfolio, Contact, NotFound } from "./pages/index";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { i18n } = useTranslation();
  document.dir = i18n.dir();
  return (
    <BrowserRouter location={"/"} navigator={undefined}>
      <Navbar />
      <main>
        <div className="columns xl:flex">
          <div className="column is-8 xl:w-[75%]">
            <div className="sections-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
          <div className="colmun is-4 xl:w-[37%]">
            <Sidebar />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}
export default App;
