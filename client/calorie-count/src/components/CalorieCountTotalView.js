import React from "react";
import "./CalorieCountTotalView.css";
import { Typography } from "@material-ui/core";

export function CalorieCountTotal(entries) {
  const total = entries.reduce((a, b) => a + (b["calories"] || 0), 0);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(Date.now()).toLocaleDateString("en-US", options);

  return (
    <div className="total-count-container">
      <Typography variant="h5" component="h3" className="total-count-top">
        {`Calories: ${total}`}
      </Typography>
      <Typography className="total-count-bottom">{date}</Typography>
    </div>
  );
}

export default CalorieCountTotal;
