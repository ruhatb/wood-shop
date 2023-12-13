import React from 'react'

const Forminput = ({label, name, type, value}) => {
  return (
    
    <div className="form-control ">
   <label className="label">
    <span className="label-text">{label}</span>
    </label>
 
  <input type={type} name={name} value={value} className="input input-bordered " />
  
  </div>
    
  )
}

export default Forminput
