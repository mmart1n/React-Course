import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { fetchCartData, sendCartData } from "./components/store/cart-actions";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      // don't send the request when the component is being initialized
      isInitial = false;
      return;
    }

    if (cart.changed) {
      // Redux toolkit accept not only action objects with a type property, it also accepts action creators that return functions
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  // we can safely add dispatch to the dependency array, react redux will make sure
  // that this function won't change and won't triggere the useEffect again

  // this way we first update our redux store
  // and then send request in order to update the backend
  // useEffect(() => {
  //   const sendCartData = async () => {
  // dispatch(
  //   uiActions.showNotification({
  //     status: "pending",
  //     title: "Sending...",
  //     message: "Sending cart data!",
  //   })
  // );
  // const response = await fetch(
  //   "https://react-http-efca2-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
  //   {
  //     method: "PUT",
  //     body: JSON.stringify(cart),
  //   }
  // );

  // if (!response.ok) {
  //   throw new Error("Sending cart data failed.");
  // }

  // dispatch(
  //   uiActions.showNotification({
  //     status: "success",
  //     title: "Success!",
  //     message: "Sent cart data successfully!",
  //   })
  // );
  // };

  // if (isInitial) { // don't send the request when the component is being initialized
  //   isInitial = false;
  //   return;
  // }

  // sendCartData().catch((error) => {
  //   dispatch(
  //     uiActions.showNotification({
  //       status: "error",
  //       title: "Error!",
  //       message: "Sending cart data failed!",
  //     })
  //   );
  // });
  // }, [cart, dispatch]); // we can safely add dispatch to the dependency array, react redux will make sure that this function won't change and won't triggere the useEffect again

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
