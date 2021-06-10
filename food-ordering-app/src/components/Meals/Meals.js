import Meal from './Meal';
import './Meals.css';

const Meals = () => {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
      
      return(
        <div className = "meals-container">
            {DUMMY_MEALS.map(m => 
            <Meal 
                id = {m.id}
                name = {m.name}
                description = {m.description}
                price = {m.price}
            />
            )}
        </div>
      )
}

export default Meals;