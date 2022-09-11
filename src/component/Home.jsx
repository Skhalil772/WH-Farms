import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="pt-24 container mx-auto">
      <div className="flex  md:flex-row flex-col-reverse items-center md:space-y-0   justify-around">
        <div className="flex flex-col space-y-8  w-[70%] justify-between    md:w-[35%]">
          <h1 className="font-bold text-3xl max-w-[20] ">
            Lorem ipsum dolor amet consectetur.
          </h1>
          <p className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            odio! Nulla sed beatae at, itaque modi aliquam deleniti assumenda
            dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit, excepturi?
          </p>
          <Link
            to="/Products"
            className="px-4 py-2 bg-black hover:opacity-80 text-white rounded-md text-center text-xl w-fit"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-[70%] md:w-[35%]">
          <img
            src="https://images.pexels.com/photos/840111/pexels-photo-840111.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Header"
            className="rounded-lg md:pb-0 pb-12 "
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
