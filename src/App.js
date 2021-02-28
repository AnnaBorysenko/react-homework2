import React from 'react'
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {changeColor} from "./actions/changeColor";


function App({color, changeColor}) {
    const buttons = [
        {id: 1, completed: false, color: 'green', text: 'Green'},
        {id: 2, completed: false, color: 'red', text: 'Red'},
        {id: 3, completed: false, color: 'blue', text: 'Blue'},
    ]
    console.log(color)
    return (
        <div className="wrapper">
            <h1>Buttons:</h1>
            {buttons.map(({id, ...btn}) =>
                (<Button
                    onClick={() => changeColor(btn.color)}
                    style={{backgroundColor: color ?? ''}}
                    {...btn}
                    id={id}
                    key={id}
                    className={"btn btn-secondary"}
                />))}
        </div>
    )
}

const mapStateToProps = ({setting}) => ({color: setting.color});


export default connect(mapStateToProps, {changeColor})(App);


