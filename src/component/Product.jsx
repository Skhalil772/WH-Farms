import Item from "./Item";
import Data from "../Data";

function Product() {
  return (
    <section className="pt-24 pb-8">
      <div className="lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 grid container mx-auto">
        {Data.map((Product, index) => (
          <Item key={index} Product={Product} />
        ))}
      </div>
    </section>
  );
}
export default Product;
