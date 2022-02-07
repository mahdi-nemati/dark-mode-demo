import { useContext, useReducer, createContext } from "react";
import Products from "./Data";
import _ from "lodash";
const ProductsProvider = createContext();
const ProductsProviderDispatcher = createContext();

const initialState = Products;
const reducer = (state, action) => {
  switch (action.type) {
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return Products;
      } else {
        const updatedProducts = Products.filter(
          (p) => p.brand.indexOf(value) >= 0
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
