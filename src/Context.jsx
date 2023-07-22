import { createContext, useContext, useState } from 'react'
import data from './data'

const blogContext = createContext()

function ContextProvider({ children }) {
  const [blogs, setBlogs] = useState(data)

  function handleLikes(id) {
    setBlogs((blogs) =>
      blogs.map((blog) => {
        if (blog.id === id) {
          return { ...blog, likes: blog.likes++ }
        }
        return blog
      })
    )
  }

  const valueToShare = {
    blogs,
    handleLikes,
  }
  return (
    <blogContext.Provider value={valueToShare}>{children}</blogContext.Provider>
  )
}

function useContextConsume() {
  const context = useContext(blogContext)
  return context
}

export { ContextProvider, useContextConsume }
