import React, {useState, useEffect} from "react";
import PizzaForm from "./pizzaForm";
import * as yup from 'yup';
import {Switch, Route, Link} from'react-router-dom';
import axios from "axios";
import schema from "./formSchema";

const initialValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  peppers: false,
  onions: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  special: ''
}

const initialPizzas = [];
const initialDisabled = true;

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);   

  const updateForm = (inputName, inputValue) => {
    setValues({...values, [inputName]: inputValue});
    validate(inputName, inputValue);
  }

 

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        setPizzas([res.data,...pizzas])
      })
      .catch(err =>{
        console.error(err);
      })
      .finally(() => {
        setValues(initialValues);
      })
  }

  const submitForm = () => {
    const newPizza = {
      name: values.name.trim(),
      size: values.size,
      toppings: ['pepperoni', 'sausage', 'peppers', 'onions'].filter(topping => !!values[topping]),
      special: values.special
    }
    window.onload(postNewPizza(newPizza));
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => {
    schema.isValid(values).then(valid => setDisabled(!valid));
  }, [values])

  
  
  console.log(pizzas)
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route exact path='/'>
          <h2>Home</h2>
          <Link to='/pizza' id='order-pizza'>Order Here</Link>
        </Route>
        <Route exact path='/pizza'>
          <h2>Order</h2>
          <PizzaForm values={values} update={updateForm} submit={submitForm} disabled={disabled} errors={formErrors} />    
        </Route>
      </Switch>
      
      
    </>
  );
};
export default App;
