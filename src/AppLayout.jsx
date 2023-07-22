import BlogCard from './BlogCard'
import { useContextConsume } from './Context'
import Trending from './Trending'

function AppLayout() {
  const { blogs } = useContextConsume()
  return (
    <>
      <div className="grid-container">
        <Trending />
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </>
  )
}

export default AppLayout
