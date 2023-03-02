import React from 'react'
import "./style.css"
export default function Joe(props) {
  return (
    <div className="Joe" style={{
      backgroundColor:props.color
    }}>
        <h1>I like cats</h1>
    </div>
  )
}
