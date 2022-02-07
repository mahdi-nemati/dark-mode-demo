import  { useContext, useReducer, createContext } from "react";
import Products from "./Data"
import _ from "lodash";
const ProductsProvider = createContext();
const ProductsProviderDispatcher = createContext();

const initialState = Products;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const newProducts = [...state];
      newProducts[index] = product;
      return newProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      const newProducts = [...state];
      newProducts[index] = product;
      if (product.quantity === 1) {
        const filtredProducts = state.filter((p) => p.id !== action.id);
        return filtredProducts;
      } else {
        product.quantity--;
        return newProducts;
      }
    }

    case "edit": {
      const newProducts = [...state];
      const index = state.findIndex((e) => e.id === action.id);
      const product = { ...state[index] };
      product.name = action.event.target.value;
      newProducts[index] = product;
      return newProducts;
    }

    case "remove": {
      const filtredProducts = state.filter((p) => p.id !== action.id);
      return filtredProducts;
    }

    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return Products;
      } else {
        const updatedProducts = Products.filter(
          (p) => p.availableRam.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }

    case "sort": {
      const Products = [...state];
      if (action.selectedOption.value === "lowest") {
        return _.orderBy(Products, ["Price"], ["asc"]);
      } else {
        return _.orderBy(Products, ["Price"], ["desc"]);
      }
    }

    case "search": {
      if (action.event.target.value === "") {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.name
            .toLocaleLowerCase()
            .includes(action.event.target.value.toLocaleLowerCase())
        );
        return filteredProducts;
      }
    }

    default:
      return state;
  }
};

const ProductsProviders = ({ children }) => {
  const [Products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsProvider.Provider value={Products}>
      <ProductsProviderDispatcher.Provider value={dispatch}>
        {children}
      </ProductsProviderDispatcher.Provider>
    </ProductsProvider.Provider>
  );
};

export default ProductsProviders;

export const useProducts = () => useContext(ProductsProvider);

export const useProductsAction = () => {
  return useContext(ProductsProviderDispatcher);
};
