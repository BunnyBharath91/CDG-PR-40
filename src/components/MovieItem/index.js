import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {itemDetails} = props
  const {thumbnailUrl, videoUrl} = itemDetails

  return (
    <li className="movie-item">
      <button type="button" className="trigger-button">
        <img alt="thumbnail" src={thumbnailUrl} className="thumbnail" />
      </button>
      <Popup modal>
        <div className="popup-container">
          <button
            aria-label="close video"
            type="button"
            className="trigger-button"
          >
            <IoMdClose className="close-video" />
          </button>
          <ReactPlayer url={videoUrl} className="movie" />
        </div>
      </Popup>
    </li>
  )
}

export default MovieItem
