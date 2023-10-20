import axios from "axios"

export const getPost = async(postId) => {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	console.log(response)
	console.log(response.data)
}