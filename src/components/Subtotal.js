import React from "react";
import CurrencyFormat from "react-currency-format";
import "../css/Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="sutotal__gift">
              <input type="checkbox" /> This Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"UGX"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
