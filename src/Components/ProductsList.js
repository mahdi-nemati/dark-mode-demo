import { useProducts } from "../Providers/ProductProvides";
const ProductsList = () => {
  const Products = useProducts();

  return (
    <main>
      <section>
        {Products.map((p) => {
          return (
            <ul>
              <li>{p.model}</li>
              <li>{p.brand}</li>
              <li>{p.Price}</li>
            </ul>
          );
        })}
      </section>
    </main>
  );
};

export default ProductsList;
