import React from 'react';
import styles from '../App.css';
import BlogPostList from './BlogPostList.jsx'
import CreatePost from './CreatePost.jsx'
import { bindActionCreators } from 'redux';
import * as BlogActions from '../actions/BlogActions';
import { connect } from 'react-redux'

@connect(state=>({blogstate: state.blogreducer}))
export default class BlogApp extends React.Component {

    constructor(props) {
        super(props);
        //no need to use local state, redux store is not authoritative
        //this.state = { posts: [{ id: 1, title: 'sample post', contents: 'this is a sample fffff', created: new Date() }]};
    }

    render(){
        const { blogstate, dispatch } = this.props;
        return (
            <div>
                <BlogPostList posts={blogstate} {...bindActionCreators(BlogActions, dispatch)} />
                <CreatePost onAdd={this.addNewPost} {...bindActionCreators(BlogActions, dispatch)} />
            </div>
        );
    }
}
