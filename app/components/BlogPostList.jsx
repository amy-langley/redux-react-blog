import React from 'react'
import styles from '../App.css'
import BlogPost from './BlogPost.jsx'

export default class BlogPostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        var removePost=this.props.removePost;
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg pull-right add-button" data-toggle="modal" data-target="#addModal"><span className="glyphicon glyphicon-plus"></span> New Post</button>
                <h1>Posts</h1>

                {this.props.posts.map(function(o,i){
                    return <BlogPost key={o.id} post={o} removePost={removePost} />
                })}
            </div>
        );
    }
}
