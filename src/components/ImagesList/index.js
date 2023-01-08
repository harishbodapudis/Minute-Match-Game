import './index.css'

const ImagesList = props => {
  const {imagesList, checkMatchThumbnail} = props
  const {thumbnailUrl, id, category} = imagesList

  const checkThumbnailId = () => {
    checkMatchThumbnail(id)
  }

  return (
    <li className="img-items">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={checkThumbnailId}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesList
