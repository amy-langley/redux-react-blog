import Immutable from 'immutable'

var samplePosts = [{ id: 3, title: 'sample title', contents: 'from the redux store' }]
const postList = new Immutable.List(samplePosts)

export default function blogReducer(state = postList, action){
	switch(action.type){
		case 'CREATE_POST':
			return addPost(action.title, action.content)
		break
		case 'REMOVE_POST':
			return removePost(id)
		break
		default:
			return postList
		break
	}
}

function addPost(title, content){
	var newPost = { id: computeId() ,title, content, created: new Date() }
	return postList.push(newPost)
}

function removePost(id){
	return postList.filter(item=>item.id != id)
}

function computeId(){
	if(!postList.count()) 
		return

	return postList.last().id+1
}