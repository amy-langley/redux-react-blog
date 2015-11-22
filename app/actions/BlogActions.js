export function createPost(title, contents) {
  return {
    type: 'CREATE_POST',
    title,
    contents
  }
}

export function deletePost(id) {
	return {
		type: 'DELETE_POST',
		id
	}
}