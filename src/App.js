import React, { useState } from "react";
import data from "./data";
import List from "./List";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const App = () => {
  const [person, setPerson] = useState(data);
  return (
    <div>
      <section className="container">
        <h3>Birthday Remainder</h3>
        <CardMedia
          sx={{ height: 300 }}
          image="https://source.unsplash.com/random/400x200/?person"
          title="Birthday Person"
        />{" "}
        <br />
        <List person={person} />
        <Stack spacing={2} direction="row">
          <Button onClick={() => setPerson([])} variant="contained">
            Clear All
          </Button>
        </Stack>
      </section>
    </div>
  );
};
export default App;
