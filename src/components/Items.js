import React, { useContext } from "react";
import { CartContext } from "./Cart";
import {Card,Box} from '@mui/material';

const Items = ({ id, price, name }) => {
  const { increment, decrement } = useContext(CartContext);

  return (
    <>
    <Box
      sx={{
        width: 250,
        height: 300,
        border:"0.5px solid",
        marginTop:"2rem",
      }}
    >
        <Card>
        <div className="items-info">
        <div className="title">
          <h3>Name : {name}</h3>
          <h3>Price : {price}</h3>
        </div>
        </div>
        <Card>
       <div className="card-total">
          <button onClick={() => increment(id)}>Add to the cart</button>
          <button onClick={() => decrement(id)}>Remove To cart</button>
        </div>
        </Card>
        </Card>
        </Box>
    </>
  );
};

export default Items;
