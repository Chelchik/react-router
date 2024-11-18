import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
        <div className='errorBox'>
            <h2>{error.status}</h2>
            <h3>{error.data.message || "Something goes wrong!"}</h3>
            <h4>{error.data.reason}</h4>
        </div>
      ) 
  }

  throw error
}

export default ErrorPage