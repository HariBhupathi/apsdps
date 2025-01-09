import React from 'react'
import { Puff } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
        <Puff width={100} height={100} color='#f7a400' />
    </div>
  )
}

export default LoadingSpinner