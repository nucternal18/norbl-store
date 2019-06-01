import React from 'react'
import './BackDrop.css'

const BackDrop = (props) => {
    // eslint-disable-next-line no-unused-expressions
    props.show ? <div className=".BackDrop" onClick={props.clicked}></div> : null
    
}

export default BackDrop;
