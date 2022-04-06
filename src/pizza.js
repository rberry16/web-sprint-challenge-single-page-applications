import React from "react";

const Pizza = (props) => {
    return (
        <Pizza>
            <h4>Pizza for {props.name}</h4>
            <p>Size: {props.size}</p>
            {
        !!props.toppings && !!props.toppings.length &&
        <div>
          Toppings:
          <ul>
            {props.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
            <p>Special Instructions: {props.special}</p>
        </Pizza>
    )
}

export default Pizza;