import React from "react";

const Pizza = (props) => {
    return (
        <Pizza>
            <h4>Pizza for {props.name}</h4>
            <p>Size: {props.size}</p>
            <p>Toppings: {props.toppings}</p>
            <p>Special Instructions: {props.specialText}</p>
        </Pizza>
    )
}

export default Pizza;