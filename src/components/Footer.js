import React from 'react'

function Footer(props) {

  return (
    <div className={`footer text-${props.mode==='dark'?'light':'dark'}`}>
      Copyright @ 2023
    </div>
  )
}

export default Footer
