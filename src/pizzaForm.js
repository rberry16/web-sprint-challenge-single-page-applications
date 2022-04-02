import React from 'react';

export default function PizzaForm(props) {
    const {
        values,
        setValues,
        reset,
    } = props;


const onCancel = evt => {
    evt.preventDefault();
    reset();
}

const onSubmit = evt => {
    evt.preventDefault();
    // submit();
}

const onChange = evt => {
    const { name, value } = evt.target
    setValues({ ...values, [name]: value })
  }

return (
    <form>
        <label>Name
            <input 
                type='text'
                name='name'
                id='name-input'
                // value={values.name}
                // onChange={onChange}
                placeholder='Enter Name'
            />
        </label>
        <label>Size
            <select name='size' id='size-input'>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </label>
        <label>Toppings
            <label>Pepperoni
                <input 
                    type='checkbox'
                    name='pepperoni'
                    id='pepperoni'
                    // checked={values.pepperoni}
                />
            </label>
            <label>Pineapple
                <input
                    type='checkbox'
                    name='pineapple'
                    id='pineapple'
                />
            </label>
            <label>Sausage
                <input 
                    type='checkbox'
                    name='sausage'
                    id='sausage'
                />
            </label>
            <label>Ham
                <input 
                    type='checkbox'
                    name='ham'
                    id='ham'
                />
            </label>
        </label>
        <label>Special Instructions?
            <input 
                type='text'
                name='special-text'
                id='special-text'
                placeholder='enter here...'
            />
        </label>
        <button id='order-button'>Place Order</button>
    </form>
)
}