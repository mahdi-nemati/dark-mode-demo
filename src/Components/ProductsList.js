import { useProducts } from "../Providers/ProductProvides";
import Filter from "../Components/Filter";
const ProductsList = () => {
  const Products = useProducts();

  return (
    <main class="flex flex-col items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl">
      <h1 class="text-purple-500 mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">Products List</h1>
      <section class="mt-9 w-9/12 md:w-7/12">
        <Filter />
      </section>
      <section class="mt-7 flex flex-col justify-center items-center w-9/12 md:w-7/12 ">
        {Products.map((p) => {
          return (
            <ul key={p.Price} class="text-gray-600 dark:bg-slate-500 dark:text-slate-200 flex justify-between w-full bg-slate-200 mb-2 rounded-md p-2">
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
