const Reducer = (state, action) => {
  if (action.type === "TTYPE") {
    const { ttype } = action.payload;
    console.log(ttype);

    return { ...state, ttype: ttype };
  }
  if (action.type === "COUNT") {
    const { total_item, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_item += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_item: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_item, total_amount };
  }
  if (action.type === "DELETE") {
    const { id, price } = action.payload;

    const tempCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: [...tempCart] };
  }

  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  }
  if (action.type === "ADD_TO_CART") {
    const { id, amount, price, title, img, total } = action.payload;
    const temp = state.cart.find((i) => i.id === id + price);
    if (temp) {
      const tempCart = state.cart.map((p) => {
        if (p.id === id + price) {
          let newAmount = p.amount + amount;
          return { ...p, amount: newAmount };
        } else {
          return p;
        }
      });
    } else {
      const newItem = {
        id: id + price,
        name: title,
        fee: total,
        image: img,
        price: price,
        amount: amount,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
    console.log("LOG TO CART");
    console.log(state);
  }
  return state;
};
export default Reducer;
