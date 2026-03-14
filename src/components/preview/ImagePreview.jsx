export default function ImagePreview({ src, alt, direction }) {
  const directionClass = direction === 'prev' ? 'slide-from-left' : 'slide-from-right'

  return (
    <div className="preview-image-stage">
      <img key={src} src={src} alt={alt} className={`preview-image ${directionClass}`} />
    </div>
  )
}
