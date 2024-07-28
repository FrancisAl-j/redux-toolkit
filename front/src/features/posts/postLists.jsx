import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "./postSlice"
import AddPostForm from "./AddPostForm"
import PostAuthor from "./PostAuthor"


const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderPost = posts.map(post => (
        <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><PostAuthor userId={post.userId}/></p>
        </article>
    ))
        
   
    return (
        <div>
            <AddPostForm />
            <h1>Post lists</h1>
            {renderPost}
        </div>
    )
}

export default PostList