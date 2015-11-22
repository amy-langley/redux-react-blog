import React from 'react'
import classNames from 'classnames'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

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
                <button className={classNames(bootstrap.btn,bootstrap['btn-primary'],bootstrap['pull-right'])} 
                    data-toggle="modal" data-target="#addModal">
                    <span className={classNames(bootstrap['glyphicon'], bootstrap['glyphicon-plus'])} />&nbsp;
                    <span>New Post</span>
                </button>
                
                <h1>Posts</h1>

                {this.props.posts.map(function(o,i){
                    return <BlogPost key={o.id} post={o} removePost={removePost} />
                })}
            </div>
        );
    }
}
