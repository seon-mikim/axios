import { useEffect } from "react"
import { getPosts } from "./apis/getPosts/getPosts"
import { getPost } from "./apis/getPost/getPost"


function App() {
  useEffect(() => {
    getPosts()
    getPost(1)
  }, [])
  return (
    <>
      안녕하세요
    </>
  )
}

export default App
