import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import TimeSlug from './TimeSlug.jsx'
import classNames from 'classnames'

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost(e){
        var id = parseInt(e.target.dataset.postId,10);
        this.props.removePost(id);
    }

    render(){
        var post = this.props.post;
        return (
            <div className={bootstrap.well}>
                <h4 className={classNames(bootstrap['pull-right'], bootstrap['glyphicon'], bootstrap['glyphicon-trash'])} onClick={this.deletePost} data-post-id={post.id}></h4>
                <h4>{post.title}</h4>
                <p>{post.contents}</p>
                <small>&mdash;Posted <TimeSlug when={post.created}></TimeSlug></small>
            </div>
        );
    }
}
