import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  console.log(actionMoviesList)
  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      <img
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-video-img"
      />
      <div className="main-container">
        <h1 className="movies-type">Action Movies</h1>

        <MoviesSlider key="ACTION" moviesList={actionMoviesList} />

        <h1 className="movies-type">Comedy Movies</h1>

        <MoviesSlider key="COMEDY" moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
