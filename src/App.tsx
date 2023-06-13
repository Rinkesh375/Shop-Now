
import SimpleSidebar from "./Pages/ProductPage";

import CartList from "./Componants/CartList";

function App() {
  return (
    <div className="App">
      <SimpleSidebar>
        <CartList />
      </SimpleSidebar>
    </div>
  );
}

export default App;
