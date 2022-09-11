import { FaTrash } from "react-icons/fa";
import { useDataContext } from "../context/DataContext";

function CartItem({ item }) {
  const { id, name, image, price, fee, amount } = item;
  const { Delete } = useDataContext();

  return (
    <div>
      <hr className="border-y-2 border-[#05445E] border-dashed" />

      <div className="md:grid-cols-6 grid gap-4 grid-cols-4 items-center container mx-auto">
        <span>
          <img src={image} className="p-2 rounded-lg" alt="image" />
        </span>
        <div className="md:hidden flex flex-col justify-between">
          <span>{name}</span>
          <span>Price : ₦{price}</span>

          <span className="">Qty : {amount}</span>
        </div>
        <span className="hidden md:flex">{name}</span>
        <span className="hidden md:flex">₦{price}</span>

        <span className="hidden md:flex">{amount}</span>
        <span>₦{fee}</span>
        <button
          className="outline-none cursor-pointer"
          onClick={() => Delete(id, price)}
        >
          <FaTrash size={25} />
        </button>
      </div>
    </div>
  );
}
export default CartItem;
