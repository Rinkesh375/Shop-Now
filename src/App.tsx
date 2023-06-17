import SimpleSidebar from "./Pages/ProductPage";

import CartList from "./Componants/CartList";
import SingleCard from "./Componants/SingleCard";

function App() {
  return (
    <div className="App">
      <SimpleSidebar>
        <CartList />
      </SimpleSidebar>
      {/* <SingleCard /> */}
    </div>
  );
}

export default App;
