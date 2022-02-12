import React from 'react';
import { Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <div id='loader'>
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="info" />
    </div> 
  )
};

export default Loader;
