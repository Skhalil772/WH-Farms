import { useDataContext } from "../context/DataContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Summary() {
  const { total_amount } = useDataContext();
  const Total = total_amount + total_amount * 0.1;
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <section className="justify-end">
      <div className="w-72 flex flex-col space-y-4 my-4">
        <div className="border-2 border-[#05445E] rounded-md font-bold  py-2">
          <div className="flex  justify-around">
            <span>SubTotal :</span>
            <span>₦{total_amount}</span>
          </div>
          <div className="flex justify-around pb-2">
            <span>Delivery Fee :</span>
            <span>₦{total_amount * 0.1}</span>
          </div>
          <hr className="border-y-2 border-[#05445E] border-dashed" />
          <div className="flex py-2 text-2xl justify-around">
            <span>Total :</span>
            <span>₦{Total}</span>
          </div>
        </div>

        {isAuthenticated ? (
          <Link
            to="/Checkout"
            className="px-3 text-right flex space-x-2 m-2 rounded-md w-fit  bg-[#05445E] text-white py-1"
          >
            Proceed to Checkout
          </Link>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="px-3 text-right flex space-x-2 m-2 rounded-md w-fit  bg-[#05445E] text-white py-1"
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </section>
  );
}
export default Summary;
