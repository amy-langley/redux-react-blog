import Immutable from 'immutable'
import * as types from '../constants/ActionTypes';

var samplePosts = [{ id: 3, title: 'sample title', contents: 'from the redux store' }]
const postList = new Immutable.List(samplePosts)

export default function blogReducer(state = postList, action){
	switch(action.type){
		case types.CREATE_POST:
			return addPost(state, action.title, action.contents)
		break
		case types.DELETE_POST:
			return removePost(state, id)
		break
		default:
			return postList
		break
	}
}

function addPost(state, title, contents){
	var newPost = { id: computeId(state), title, contents, created: new Date() }
	return state.concat(newPost)
}

function removePost(state, id){
	return state.filter(item=>item.id != id)
}

function computeId(state){
	if(!state.count()) 
		return 1

	return state.last().id+1
}