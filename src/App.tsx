import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Footer, Header } from "./components/layouts";
import { Home, Error, ProjectShow, Contact } from "./components/pages";
import Language from "./components/layouts/Language";

function App() {
  return (
    <>
      <Header />

      <Language />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/project/:id" element={<ProjectShow />} />
        </Route>
        <Route path="/imprint" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
