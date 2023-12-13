import React from 'react'

import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

  const error = useRouteError();


  return (
    <h3 className='font-bold text-4xkl'>
      There was an error.. !
      
    </h3>
  )
}

export default ErrorElement;
