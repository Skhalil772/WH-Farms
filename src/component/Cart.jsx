import { useDataContext } from "../context/DataContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Summary from "./Summary";
// import Payment from "./Payment";

function Cart() {
  const { cart, Clear } = useDataContext();

  return (
    <section className="container mx-auto pt-24">
      <div className="md:grid-cols-6 grid gap-4 grid-cols-4 py-6 container mx-auto">
        <span></span>
        <span>Item</span>
        <span className="hidden md:flex">Price</span>

        <span className="hidden md:flex">Quantity</span>
        <span>Subtotal</span>
        <span></span>
      </div>
      <div>
        {cart.length === 0 && (
          <div>
            <hr className="border-y-2 border-[#05445E] border-dashed" />
            <div className="flex items-center flex-col space-y-6 my-8">
              <p className="text-2xl font-semibold">YOUR CART IS EMPTY</p>
              <Link
                className="bg-[#05445E] text-white  rounded-md w-fit px-3 py-1"
                to="/Products"
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
      <div>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <div>
        {cart.length > 0 && (
          <div>
            <hr className="border-y-2 border-[#05445E] border-dashed" />

            <div className="flex items-center my-6">
              <Link
                className="bg-[#05445E] text-white  rounded-md w-fit px-3 py-1 mx-auto "
                to="/Products"
              >
                Continue Shopping
              </Link>
              <button
                onClick={Clear}
                className="bg-[#05445E] text-white  rounded-md w-fit px-3 py-1 mx-auto "
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
      {cart.length !== 0 && <Summary />}
      {/* {cart.length !== 0 && <Payment />} */}
    </section>
  );
}
export default Cart;
