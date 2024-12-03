import { Route,  Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import CongratsPage from "./pages/CongratsPage";
import Home from "./pages/Home";
import Suppliers from "./component/Suppliers";
import Services from "./component/Services";



function App() {
  return (<>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/congrats" element={<CongratsPage />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      {/* <Trial/> */}
  </>
  );
}

export default App;
