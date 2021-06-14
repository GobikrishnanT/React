import React from 'react'

function WrapperGiver(props) {
    let classname = props.className;
    return (
        <div className = {classname}>
            {props.children}
        </div>
    )
}

export default WrapperGiver
