import { useParams, useNavigate } from 'react-router-dom'
import { useContextConsume } from './Context'
import { PiHandsClappingLight, PiBackspaceLight } from 'react-icons/pi'

function Page() {
  const { id: curID } = useParams()
  const { blogs, handleLikes } = useContextConsume()
  const cur = blogs.filter((blog) => blog.id === +curID)
  const { title, author, image, text, likes, avatar, id } = cur[0]
  const nav = useNavigate()

  return (
    <div className="page">
      <div className="back-container" onClick={() => nav(-1)}>
        <PiBackspaceLight className="back-icon" />
        <p>Back to Home</p>
      </div>
      <div className="page-img-container">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <div className="profile-container">
        <div className="avatar-container">
          <img src={avatar} alt="avatar" />
        </div>
        <h3>{author}</h3>
      </div>
      <div className="like-container" onClick={() => handleLikes(id)}>
        <PiHandsClappingLight className="icon-clap" />
        <span>{likes}</span>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Page
