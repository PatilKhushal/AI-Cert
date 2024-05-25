import React from 'react'

function FormAlert({message}) {
  return (
    <div>
      <h1 className='text-red-500 font-semibold'>{message}</h1>
    </div>
  )
}

export default FormAlert
