import React, { useState, useReducer } from "react";
import './CalorieCountEntryForm.css'
import { TextField, Button, Typography } from "@material-ui/core";


import { createCalorieCountEntry } from "../api/CalorieCountApi";

const CalorieCountEntryForm = ({ onClose }) => {
  // const useStyles = makeStyles((theme) => ({
  //   button: {
  //     margin: theme.spacing(1),
  //   },
  //   leftIcon: {
  //     marginRight: theme.spacing(1),
  //   },
  //   rightIcon: {
  //     marginLeft: theme.spacing(1),
  //   },
  //   iconSmall: {
  //     fontSize: 20,
  //   },
  //   root: {
  //     padding: theme.spacing(3, 2),
  //   },
  //   container: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     //width: 400,
  //   },
  // }));

  //const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      calories: "",
      protein: "",
      carbohydrates: "",
      fat: "",
    }
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { calories, protein, carbohydrates, fat } = formInput;

    let data = { calories, protein ,carbohydrates, fat };

    setLoading(true);
    data.date = Date.now();
    createCalorieCountEntry(data)
      .then((res) => {
        console.log(`js105 resp is : ${res}`);
        onClose();
      })
      .catch((error) => {
        console.error(error);
        setError(handleError(error));
        setLoading(false);
      });
  };

  const handleError = (error) => {
    const statusCode = error.statusCode;
    if(statusCode === '422') {
      return "Invalid Calorie entry"
    } else {
      return "Unknown Error, good luck have fun"
    }
  }

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div className="entry-form-container">
      <form onSubmit={handleSubmit} className="entry-form">
        {
          error &&
          <Typography variant="h5" component="h3">
          {error}
          </Typography>
        }
        <TextField
          label="Calories"
          id="margin-normal"
          name="calories"
          type="number"
          defaultValue={formInput.calories}
          className={'text-field'}
          onChange={handleInput}
          variant={'filled'}
          required
        />
        <TextField
          label="Protein"
          id="margin-normal"
          name="protein"
          type="number"
          defaultValue={formInput.protein}
          className={'text-field'}
          onChange={handleInput}
          variant={'filled'}
        />
        <TextField
          label="Carbohydrates"
          id="margin-normal"
          name="carbohydrates"
          type="number"
          defaultValue={formInput.carbohydrates}
          className={'text-field'}
          onChange={handleInput}
          variant={'filled'}
        />
        <TextField
          label="Fat"
          id="margin-normal"
          name="fat"
          type="number"
          defaultValue={formInput.fat}
          className={'text-field'}
          onChange={handleInput}
          variant={'filled'}
        />
        <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? "Loading..." : "Add Entry"}
          </Button>
      </form>
    </div>
  );
};

export default CalorieCountEntryForm;
