import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = () => {
  return (
    <div className='container '>
      <div className='row '>
        <div className='col-s12 '>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      </div>
    </div>
  );
};

export default Loading;