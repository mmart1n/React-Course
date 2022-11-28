import React from "react";

import Card from "../UI/Card";
import "./ProductItem.css";
import { useStore } from "../../hooks-store/store";

const ProductItem = React.memo((props) => {
  // const dispatch = useDispatch(); REDUX
  // const toggleFav = useContext(ProductsContext).toggleFav; ContextApi
  console.log("RENDERING");
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id)); REDUX
    // toggleFav(props.id); ContextAPI
    dispatch("TOGGLE_FAV", props.id); // action identifier and payload
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
