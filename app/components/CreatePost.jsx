import React from 'react'
import styles from '../App.css'

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', contents: '' };
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

    doAdd(e){
        this.props.onAdd(this.state.title, this.state.contents);
        this.resetState();
    }

    render(){
        return (

<div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
<div className="modal-dialog">
    <div className='modal-content'>
        <div className="modal-header bg-primary"><h4>New Post</h4></div>
        <div className="modal-body">
            <input id='postTitle' className="form-control" type="text" onChange={this.handleChange} value={this.state.title} placeholder='Title of Post'/>
            <br/>
            <textarea className='form-control' id='postContents' onChange={this.handleChange} value={this.state.contents} placeholder='Your Post' />
        </div>
        <div className='modal-footer'>
            <button onClick={this.resetState} className='btn btn-default' data-dismiss='modal'>Cancel</button>
            <button onClick={this.doAdd} className='btn btn-primary' data-dismiss="modal">Add</button>                     
        </div>
    </div>
</div>
</div>

        );
    }
}
