import React from 'react'
const capitalize =(word)=>{
    const lower = word.toLowerCase();
    return  lower.charAt(0).toUpperCase() + lower.slice(1);
}
function Alert(prop) {
  return (
   prop.alert &&<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{capitalize(prop.alert.type)}</strong>:{prop.alert.msg}
</div>
  )
}

export default Alert
