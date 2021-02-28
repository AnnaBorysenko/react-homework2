import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Button(props) {
    return (
        <button
            id={props.id}
            type="button"
            className={props.className}
            onClick={props.onClick}
            style={props.style}
        >
            {props.text}
        </button>

    )
}