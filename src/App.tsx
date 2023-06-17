import SimpleSidebar from "./Pages/ProductPage";

import CartList from "./Componants/CartList";
import MainRoutes from "./Pages/MainRoutes";
import Navbar from "./Componants/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <SimpleSidebar>
        <CartList />
      </SimpleSidebar> */}
      {/* <Home/> */}
      <MainRoutes />
    </div>
  );
}

export default App;
