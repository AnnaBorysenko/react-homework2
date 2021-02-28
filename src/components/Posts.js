import React from 'react'
import {connect} from "react-redux";


 function Posts({posts}) {

    return (
        <div className="container ">
            <ul className="flex-row">{
                posts.map(post => (

                    <li key={post.id} className="card">

                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                    </li>
                ))
            }
            </ul>
        </div>

    )
}

const mapStateToProps = ({resource}) => ({posts: resource.posts});

export default connect(mapStateToProps, null)(Posts);
