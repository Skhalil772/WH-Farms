import {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import Reducer from "./reducer";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Open, SetOpen] = useState(false);
  const [Price, SetPrice] = useState(0);
  const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  };

  const initialState = {
    cart: getLocalStorage(),
    total_item: 5,
    total_amount: 0,
    ttype: "",
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const Update = (e) => {
    e.preventDefault();
    SetPrice(e.target.value);
    console.log(e.target.name);
  };
  const AddCart = (id, amount, price, title, img, total) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, price, title, img, total },
    });
  };
  const Clear = () => {
    dispatch({ type: "CLEAR" });
  };
  const Delete = (id, price) => {
    dispatch({ type: "DELETE", payload: { id, price } });
    console.log(id, price);
  };
  useEffect(() => {
    dispatch({ type: "COUNT" });
    console.log("item added");
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <DataContext.Provider
      value={{
        ...state,
        Open,
        SetOpen,
        Update,
        Price,
        AddCart,
        Delete,
        Clear,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => {
  return useContext(DataContext);
};
