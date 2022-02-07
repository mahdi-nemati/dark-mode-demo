import { useProducts } from "../Providers/ProductProvides";
const ProductsList = () => {
  const Products = useProducts();

  return (
    <main class="flex justify-center">
      <section class="mt-28 flex flex-col justify-center items-center w-9/12 ">
        {Products.map((p) => {
          return (
            <ul key={p.Price} class="flex justify-between w-full">
              <li>{p.name}</li>
              <li>{p.brand}</li>
              <li>$ {p.Price}</li>
            </ul>
          );
        })}
      </section>
    </main>
  );
};

export default ProductsList;
