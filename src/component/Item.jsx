import { Link } from "react-router-dom";
function Item({ Product }) {
  return (
    <section className=" bg-[#05445E] rounded-md shadow-sm   p-4 text-white shadow-white">
      <div className="flex flex-col space-y-3">
        <img
          src={Product.main}
          className=" w-[100%] h-[250px] "
          alt={Product.name}
        />
        <span className="text-xl font-semibold">{Product.name}</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim
          natus rerum, corporis in nisi, inventore odit atque beatae dolores
          cupiditate alias iure! Aperiam architecto, sint cumque asperiores amet
          voluptatum.
        </span>
        <Link
          to={`/Products/${Product.id}`}
          className="px-3 py-1 bg-gray-300 hover:opacity-80 text-black rounded-md text-center text-md w-fit"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
}
export default Item;
