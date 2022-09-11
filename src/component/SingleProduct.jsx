import Data from "../Data";
import Size from "../Size";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";

function SingleProduct() {
  const { Update, AddCart, Price, Ttype } = useDataContext();
  const [Amount, SetAmount] = useState(1);
  const [Total, SetTotal] = useState(null);
  const [Able, SetAble] = useState(true);

  const Calc = (A, P) => {
    let finish = A * Number(P);
    SetTotal(finish);
  };
  useEffect(() => {
    Calc(Amount, Price);
  }, [Amount, Price]);
  const Test = (e) => {
    if (+e.target.value !== 0) {
      SetAble(false);
    } else {
      SetAble(true);
    }
  };

  const { Productid: id } = useParams();
  const Product = Data.find((pro) => pro.id === Number(id));
  const Pick = Size.find((pro) => pro.id === Number(id));
  const [Img, SetImg] = useState(Product.main);

  const Main = (e) => {
    e.preventDefault();
    SetImg(Product.main);
  };
  const One = (e) => {
    e.preventDefault();
    SetImg(Product.one);
  };
  const Two = (e) => {
    e.preventDefault();
    SetImg(Product.two);
  };
  const Tre = (e) => {
    e.preventDefault();
    SetImg(Product.tre);
  };
  const Add = (e) => {
    e.preventDefault();
    SetAmount((prev) => prev + 1);
  };
  const Minus = (e) => {
    e.preventDefault();

    if (Amount > 1) {
      SetAmount((prev) => prev - 1);
    } else SetAmount(1);
  };

  return (
    <section className="text-xl pt-20 container mx-auto">
      <div className="md:grid-cols-2 grid-cols-1 grid gap-6">
        <div className="w-full p-4 flex-col flex space-y-4">
          <div>
            <img src={Img} alt="" className="w-full h-[400px] rounded-xl" />
          </div>
          <div className="grid-cols-4 grid gap-3  h-28">
            <img
              src={Product.main}
              alt=""
              className="rounded-xl h-full cursor-pointer"
              onClick={Main}
            />
            <img
              src={Product.one}
              alt=""
              className="rounded-xl h-full cursor-pointer"
              onClick={One}
            />
            <img
              src={Product.two}
              alt=""
              className="rounded-xl h-full cursor-pointer"
              onClick={Two}
            />
            <img
              src={Product.tre}
              alt=""
              className="rounded-xl h-full cursor-pointer"
              onClick={Tre}
            />
          </div>
        </div>
        <div className="px-8 py-4 flex flex-col space-y-8">
          <h2>{Product.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            maiores nemo ab dolore sed facilis nisi tempore expedita repellendus
            eum aspernatur, alias pariatur distinctio? Incidunt rem labore
            accusamus autem eaque.
          </p>

          <div className="flex justify-between">
            <div className="mb-3 ">
              <select
                name="company"
                onChange={Update}
                onClick={Test}
                className="form-select appearance-none block w-fit px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-gray-300 focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="0">Open this select menu</option>
                {Pick.option.map((c, index) => {
                  return (
                    <option key={index} value={Pick.price[index]}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
            <span>{Total}</span>

            <div className="flex  text-2xl">
              <button
                onClick={Minus}
                className="rounded-l-md px-[11px]  h-fit bg-gray-500 hover:bg-gray-400 flex justify-center items-center"
              >
                -
              </button>
              <span className="px-3  text-lg h-fit bg-gray-300 flex justify-center items-center">
                {Amount}
              </span>
              <button
                onClick={Add}
                className="rounded-r-md px-2  h-fit flex justify-center items-center bg-gray-500 hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-[#05445E] text-white disabled:bg-opacity-80 rounded-md w-fit px-3 py-1"
              disabled={Able}
              onClick={() =>
                AddCart(id, Amount, Price, Product.name, Product.main, Total)
              }
            >
              Add to Cart
            </button>
            <Link
              className="bg-[#05445E] text-white  rounded-md w-fit px-3 py-1  "
              to="/Products"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct;
