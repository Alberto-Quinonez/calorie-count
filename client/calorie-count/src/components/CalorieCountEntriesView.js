import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

function getVal(val) {
  return val ? val : "-";
}

export function CalorieCountEntriesList(entries, handleDelete) {
  return (
    <div className={"entry-list-container"}>
      <List component="nav" aria-label="main">
        {entries.map((entry) => (
          <ListItem key={entry._id} alignItems="center" className="list-item">
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText
              primary={`Calories: ${entry.calories}`}
              secondary={
                <React.Fragment>
                  <div>{`Protein: ${getVal(entry.protein)}`}</div>
                  <div>{`Carbohydrates: ${getVal(entry.carbohydrates)}`}</div>
                  <div>{`Fat: ${getVal(entry.fat)}`}</div>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(entry._id)}>
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CalorieCountEntriesList;
