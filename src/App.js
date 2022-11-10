import "./App.css";
import Header from "./components/header/Header";
import ProductList from "./components/ProductList";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="ecommerce-app">
      <CartProvider>
        <Header />
        <ProductList />
      </CartProvider>
    </div>
  );
}

export default App;
