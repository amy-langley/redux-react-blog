import React from 'react'
import classNames from 'classnames'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import TimeSlug from './TimeSlug.jsx'

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.removePost = this.removePost.bind(this)
    }

    removePost(e){
        var id = parseInt(e.target.dataset.postId,10);
        this.props.removePost(id);
    }

    render(){
        console.log(this.props)
        var post = this.props.post;
        const { blog, dispatch } = this.props;
        return (
            <div className={bootstrap.well}>
                <h4 className={classNames(bootstrap['pull-right'], bootstrap['glyphicon'], bootstrap['glyphicon-trash'])} onClick={this.removePost} data-post-id={post.id}></h4>
                <h4>{post.title}</h4>
                <p>{post.contents}</p>
                <small>&mdash;Posted <TimeSlug when={post.created}></TimeSlug></small>
            </div>
        );
    }
}
