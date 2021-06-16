import React from "react";
import CurrencyFormat from "react-currency-format";
import "../css/Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducers/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="sutotal__gift">
              <input type="checkbox" /> This Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"UGX"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
