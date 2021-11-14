import React, { useState, useEffect } from "react";
import "./App.css";
import {
  listCalorieCountEntries,
  deleteCalorieCountEntry,
} from "./api/CalorieCountApi";
import { Button } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
import CalorieCountEntriesList from "./components/CalorieCountEntriesView";
import CalorieCountTotal from "./components/CalorieCountTotalView";
import CalorieCountEntryForm from "./forms/CalorieCountEntryForm";

const App = () => {
  console.log("CalorieCountEntriesList", CalorieCountEntriesList);

  const [calorieCountEntries, setCalorieCountEntries] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const getCalorieCountEntries = async () => {
    const calorieCountEntries = await listCalorieCountEntries();
    setCalorieCountEntries(calorieCountEntries);
  };

  const getCaloriesCountPromise = () => {
    listCalorieCountEntries().then((calorieCountEntries) =>
      setCalorieCountEntries(calorieCountEntries)
    );
  };

  const handleDelete = (id) => {
    console.log(`event ${id}`);
    //deleteCalorieCountEntry
  };

  useEffect(() => {
    getCaloriesCountPromise();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="calorie-count-app">
      <div className="calorie-count-list">
        {CalorieCountTotal(calorieCountEntries)}
        {<Divider />}
        {CalorieCountEntriesList(calorieCountEntries, handleDelete)}
        <Button
          variant="contained"
          size="large"
          color="primary"
          className="add-calorie-btn"
          onClick={handleClick}
        >
          Add Calorie
        </Button>
      </div>
      <Popper
        id={"simple-popper"}
        className={"calorie-count-input-popout"}
        anchorEl={anchorEl}
        open={open}
      >
        <CalorieCountEntryForm
          onClose={() => {
            setAnchorEl(null);
            getCalorieCountEntries();
          }}
        />
      </Popper>
    </div>
  );
};

export default App;
