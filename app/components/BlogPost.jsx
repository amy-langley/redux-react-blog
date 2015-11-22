import React from 'react'
import styles from '../App.css'
import TimeSlug from './TimeSlug.jsx'

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
    }

    deletePost(e){
        var id = parseInt(e.target.dataset.postId,10);
        this.props.removePost(id);
    }

    render(){
        var post = this.props.post;
        return (
            <div className='well blog-post'>
                <h4 className='pull-right glyphicon glyphicon-trash' onClick={this.deletePost} data-post-id={post.id}></h4>
                <h4>{post.title}</h4>
                <p>{post.contents}</p>
                <small>&mdash;Posted <TimeSlug when={post.created}></TimeSlug></small>
            </div>
        );
    }
}
