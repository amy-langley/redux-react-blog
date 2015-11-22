// https://jsfiddle.net/amy_boyer/66jw0xee/

import React from 'react';
import styles from '../App.css';
import BlogPostList from './BlogPostList.jsx'
import CreatePost from './CreatePost.jsx'
import { bindActionCreators } from 'redux';
import * as BlogActions from '../actions/BlogActions';
import { connect } from 'react-redux'

@connect(state=>({blog: state.blog}))
export default class BlogApp extends React.Component {

    constructor(props) {
        super(props);
        //this.state = { posts: [{ id: 1, title: 'sample post', contents: 'this is a sample fffff', created: new Date() }]};
        this.addNewPost = this.addNewPost.bind(this);
        this.removePost = this.removePost.bind(this);
    }

    addNewPost(title, contents){
        var posts = this.state.posts.slice();
        var nextIndex = posts.length ? posts[posts.length-1].id + 1 : 1;
        posts.push({id: nextIndex, title: title, contents: contents, created: new Date()});
        this.setState({posts: posts});
    }

    removePost(id){
        var posts = this.state.posts.filter(function(item){
            return item.id!=id;
        });
        this.setState({posts: posts});
    }

    render(){
        const { blog, dispatch } = this.props;
        return (
            <div>
                <BlogPostList posts={blog} removePost={this.removePost} {...bindActionCreators(BlogActions, dispatch)} />
                <CreatePost onAdd={this.addNewPost} {...bindActionCreators(BlogActions, dispatch)} />
            </div>
        );
    }
}
