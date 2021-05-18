import React, { useState , useEffect } from 'react';
import './App.css';
import { listCalorieCountEntries, createCalorieCountEntry} from './api/CalorieCountApi';

const App = () => {
  const [calorieCountEntries, setCalorieCountEntries] = useState([]);


  const getCalorieCountEntries = async () => {
    const calorieCountEntries = await listCalorieCountEntries();
    setCalorieCountEntries(calorieCountEntries);
  }

  useEffect(() => {
    getCalorieCountEntries();
  }, [
    //Here we put the variables that are dependant, if they change, we would want to re-run our useEffect function
  ]);

  const listItems = calorieCountEntries.map((c) => 
    <li key={c.createdAt}>
      <div>
        <div>{c.createdAt}</div>
        <div>{c.protein}</div>
        <div>{c.carbohydrates}</div>
        <div>{c.fat}</div>
      </div>
    </li>
  );

  return (
    <div>
      {listItems}
    </div>
  );
}

export default App;
