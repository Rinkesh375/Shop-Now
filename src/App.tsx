
import SimpleSidebar from "./Pages/ProductPage";

import CartList from "./Componants/CartList";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import CartPage from "./Pages/cartPage";

function App() {
  return (
    <div className="App">
      {/* <SimpleSidebar>
        <CartList />
        
      </SimpleSidebar> */}
      {/* <Login/>
        <Signup/> */}
        <CartPage/>
    </div>
  );
}

export default App;
