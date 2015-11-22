import * as types from '../constants/ActionTypes';

export function createPost(title, contents) {
  return {
    type: types.CREATE_POST,
    title,
    contents
  }
}

export function deletePost(id) {
	console.log('go')
	return {
		type: types.DELETE_POST,
		id
	}
}