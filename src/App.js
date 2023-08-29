import { Route, Routes } from "react-router-dom";
import Landing from "./MainLanding/Landing";
import Prod from "./AllProducts/ProdList";
import Product from "./Product/Product";
import PersonalArea from "./PersonalArea/PersonalArea";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:type" element={<Prod />} />
      <Route path="/:type/:name" element={<Product />} />
      <Route path="/personal" element={<PersonalArea />} />
    </Routes>
  );
}

export default App;
