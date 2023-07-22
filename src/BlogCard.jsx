import { useContextConsume } from './Context'
import { Link } from 'react-router-dom'
import { PiHandsClappingLight } from 'react-icons/pi'

function BlogCard({ blog }) {
  const { title, author, image, text, likes, avatar, id } = blog
  const { handleLikes } = useContextConsume()

  const bgStyles = {
    background: `linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0.5)), url(${image}) no-repeat center / cover`,
    height: '10rem',
    width: '100%',
    borderRadius: '1rem',
    position: 'relative',
  }
  const ffStyles = {
    background: `linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0.1)), url(${image}) no-repeat center / cover`,
    height: '100%',
    width: '100%',
    color: 'transparent',
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="front-face" style={ffStyles}>
          <h1>{title}</h1>
        </div>
        <div className="back-face">
          <div className="backface-img-container" style={bgStyles}>
            <h2>{title}</h2>
          </div>
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
          <p>
            <span className="quotes">&ldquo; </span>
            {`${text.substring(0, 600)} ...`}
            <span className="quotes">&rdquo; </span>
          </p>

          <Link className="btn" to={`${id}`}>
            Read Full Article
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
