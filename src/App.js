import React, {useState} from "react";
import PizzaForm from "./pizzaForm";
import Pizza from "./pizza";
import {Switch, Route, Link} from'react-router-dom';
import axios from "axios";

const initialValues = {
  name: '',
  size: '',
  toppings: '',
  special: ''
}

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  const [values, setValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {
    setValues({...values, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newPizza = {
      name: values.name.trim(),
      size: values.size,
      toppings: values.toppings,
      special: values.special
    }

    if (!newPizza.name || !newPizza.size) return;

    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setValues(initialValues);
      })
  }

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
          <PizzaForm values={values} update={updateForm} submit={submitForm} />
        </Route>
        <Route exact path='/myOrder'>
          <h2>My Order</h2>
        </Route>
      </Switch>
      
      {pizzas.map(pizza => {
        return (
          <Pizza key={pizza.id} details={pizza} />
        )
      })}
    </>
  );
};
export default App;
