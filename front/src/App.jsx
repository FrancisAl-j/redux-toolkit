import Practice from './userReducer'
import Counter from './features/counter/Counter'
import PostList from './features/posts/postLists'

const App = () => {
  return (
    <div>
      <div>
        <PostList />
      </div>
    </div>
  )
}

export default App