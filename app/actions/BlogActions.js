import * as types from '../constants/ActionTypes';

export function createPost(title, contents) {
  return {
    type: types.CREATE_POST,
    title,
    contents
  }
}

export function deletePost(id) {
	return {
		type: types.DELETE_POST,
		id
	}
}