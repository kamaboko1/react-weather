import React from 'react'

 const InputForm = (props) => {
  return (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Enter City..."/>
        <button>Get Weather</button>
    </form>
  )
}

export default InputForm;