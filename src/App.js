import "./App.css";
import ProductsList from "./Components/ProductsList";
import { ThemeProvider } from "./Components/ThemeContext";
import Background from "./Components/Background";
import Toggle from "./Components/ThemeToggle";
import ProductsProviders from "./Providers/ProductProvides";
function App() {
  return (
    <ProductsProviders>
      <ThemeProvider>
        <Background>
          <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
          <ProductsList />
        </Background>
      </ThemeProvider>
    </ProductsProviders>
  );
}

export default App;
