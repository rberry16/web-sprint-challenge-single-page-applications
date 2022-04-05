import React from "react";

export default function PizzaForm(props) {
    const {values, update, submit} = props;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div id='inputs'>
                <label>Name
                    <input 
                        type='text'
                        id='name-input'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label><br />
                <label>Size
                    <select 
                        id='size-dropdown'
                        name='size'
                        value={values.size}
                        onChange={onChange}
                    >
                        <option name=''>Please select size...</option>
                        <option name='small'>Small</option>
                        <option name='medium'>Medium</option>
                        <option name='large'>Large</option>
                    </select>
                </label><br/>
                <label>Toppings:
                    <input type='checkbox' checked={values} id='pepperoni' name='pepperoni' onChange={onChange} />
                    <label for='pepperoni'>Pepperoni</label>
                    <input type='checkbox' checked={values} id='sausage' name='sausage' onChange={onChange} />
                    <label for='sausage'>Sausage</label>
                    <input type='checkbox' checked={values} id='peppers' name='peppers' onChange={onChange} />
                    <label for='peppers'>Peppers</label>
                    <input type='checkbox' checked={values} name='onions' onChange={onChange} />
                    <label for='onions'>Onions</label>
                </label><br/>
                <label>Special Instructions
                    <input 
                        type='text'
                        id='special-text'
                        name='special'
                        value={values.special}
                        onChange={onChange}
                    />
                </label>
                <button>Place Order</button>
            </div>
        </form>
    )
}