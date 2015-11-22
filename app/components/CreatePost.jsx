import React from 'react'
import classNames from 'classnames'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../App.css'

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', contents: '' };
        this.handleChange = this.handleChange.bind(this)
        this.addPost = this.addPost.bind(this)
    }

    handleChange(e){
        if(e.target.id=='postTitle')
            this.setState({title: e.target.value});
        if(e.target.id=='postContents')
            this.setState({contents: e.target.value});
    }

    resetState(){
        this.setState({title: '', contents: ''});
    }

    addPost(e){
        this.props.createPost(this.state.title, this.state.contents)
        this.resetState();
    }

    render(){
        return (

<div className={classNames(bootstrap["modal-dialog"],'modal-dialog')}>
    <div className={bootstrap['modal-content']}>
        <div className={classNames(bootstrap["modal-header"], bootstrap["bg-primary"])}><h4>New Post</h4></div>
        <div className={bootstrap["modal-body"]}>
            <input id='postTitle' className={bootstrap["form-control"]} type="text" onChange={this.handleChange} value={this.state.title} placeholder='Title of Post'/>
            <br/>
            <textarea className={bootstrap['form-control']} id='postContents' onChange={this.handleChange} value={this.state.contents} placeholder='Your Post' />
        </div>
        <div className={bootstrap['modal-footer']}>
            <button onClick={this.resetState} className={classNames(bootstrap['btn'], bootstrap['btn-default'])} data-dismiss='modal'>Cancel</button>
            <button onClick={this.addPost} className={classNames(bootstrap['btn'], bootstrap['btn-primary'])} data-dismiss="modal">Add</button>                     
        </div>
    </div>
</div>

        );
    }
}
