import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "./postSlice";
import { selectAllUsers } from "../user/userSlice.js";

const AddPostForm = () => {
    const [ post, setPost ] = useState({
        title: '',
        content: ''
    })
    const dispatch = useDispatch();

    const [ userId, setUserId ] = useState('');

    const users = useSelector(selectAllUsers);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setPost(prevPost => {
            return {
                ...prevPost,
                [name]: value
            }
        })
    }

    const onAuthorChange = (e) => {
        setUserId(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(post.title && post.content) {
            dispatch(
                newPost(
                    post.title, 
                    post.content,
                    userId
                )
            )

            setPost({
                title: '',
                content: ''
            })
        }
    }

    const canSave = Boolean(post.title) && Boolean(post.content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <div>
            <h1>Add Post</h1>
            <form>
                <input  
                    type="text" 
                    value={post.title} 
                    name='title'
                    placeholder="Title"
                    onChange={handleChange}
                />

                <label htmlFor="postAuthor">Author</label>
                <select 
                    id="postAuthor"
                    value={userId} 
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {userOptions}
                </select>

                <input  
                    type="text" 
                    value={post.content} 
                    name='content'
                    placeholder='Content'
                    onChange={handleChange}
                />

                <button onClick={handleSubmit} disabled={!canSave}>Save Post</button>
            </form>
        </div>
    )
}

export default AddPostForm