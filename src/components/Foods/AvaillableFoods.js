import classes from './AvaillableFoods.module.css';

const DUMMY_FOODS = [
  {
    id: 'f1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'f2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'f3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'f4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvaillableFoods = () => {
  const foodsList = DUMMY_FOODS.map((meal => (
    <li key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </div>
    </li>
  )));

  return (
    <section className={classes.foods}>
      <ul>
        {foodsList}
      </ul>
    </section>
  );
};

export default AvaillableFoods;