import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-10 p-10">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Cart</h1>
      </div>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>
            Cart is empty.{" "}
            <a href="/" className="text-primary">
              Add items
            </a>{" "}
            to the cart.
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
