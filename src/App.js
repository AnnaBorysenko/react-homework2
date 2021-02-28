import React from 'react'
import Posts from "./components/Posts";
import {connect} from "react-redux";
import {getPosts} from "./actions/getPosts";


function App({getPosts}) {

    return (
        <div className="wrapper container d-flex flex-column  justify-content-center">
            <button onClick={getPosts} className="btn btn-secondary ">Get posts</button>
            <Posts/>
        </div>
    )
}


export default connect(null, {getPosts})(App);


