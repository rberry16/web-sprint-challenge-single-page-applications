import React from "react";

export default function PizzaForm(props) {
    const {values, update, submit, disabled, errors} = props;

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
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
                    <input type='checkbox' checked={values.pepperoni} id='pepperoni' name='pepperoni' onChange={onChange} />
                    <label htmlFor='pepperoni'>Pepperoni</label>
                    <input type='checkbox' checked={values.sausage} id='sausage' name='sausage' onChange={onChange} />
                    <label htmlFor='sausage'>Sausage</label>
                    <input type='checkbox' checked={values.peppers} id='peppers' name='peppers' onChange={onChange} />
                    <label htmlFor='peppers'>Peppers</label>
                    <input type='checkbox' checked={values.onions} name='onions' onChange={onChange} />
                    <label htmlFor='onions'>Onions</label>
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
                <button disabled={disabled}>Place Order</button>
                <div>{errors.name}</div>
            </div>
        </form>
    )
}