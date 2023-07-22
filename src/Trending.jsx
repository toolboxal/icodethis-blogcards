import { useContextConsume } from './Context'
import { PiHandsClappingLight } from 'react-icons/pi'

function Trending() {
  const { blogs } = useContextConsume()
  const sorted = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div className="trend-container">
      <p>Trending</p>
      {sorted.map((blog, index) => (
        <SingleTrend key={blog.id} blog={blog} index={index} />
      ))}
    </div>
  )
}

function SingleTrend({ blog, index }) {
  return (
    <div className="single-trend">
      <div className="rank">{index + 1}</div>
      <div className="profile-container">
        <div className="avatar-container">
          <img src={blog.avatar} alt="avatar" />
        </div>
        <div>
          <h3>{blog.author}</h3>
          <h4>{blog.title}</h4>
          <div className="like-container" style={{ pointerEvents: 'none' }}>
            <PiHandsClappingLight className="icon-clap" />
            <span>{blog.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
