import React from 'react'
import classNames from 'classnames'

import * as BlogActions from '../actions/BlogActions';

import styles from '../App.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import BlogPost from './BlogPost.jsx'

import { connect } from 'react-redux'

@connect(state=>({blog: state.blog}))
export default class BlogPostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const deletePost = this.props.deletePost;
        return (
            <div>

                <h1>Posts</h1>

                {this.props.posts.map(function(o,i){
                    return <BlogPost key={o.id} post={o} removePost={deletePost} />
                })}
            </div>
        );
    }
}
