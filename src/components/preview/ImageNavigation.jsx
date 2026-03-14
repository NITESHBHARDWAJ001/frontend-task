export default function ImageNavigation({
  currentIndex,
  total,
  onPrevious,
  onNext,
}) {
  return (
    <>
      <button
        className="nav-arrow nav-arrow-left"
        type="button"
        aria-label="Previous preview"
        onClick={onPrevious}
      >
        <span aria-hidden="true">&#8249;</span>
      </button>

      <button
        className="nav-arrow nav-arrow-right"
        type="button"
        aria-label="Next preview"
        onClick={onNext}
      >
        <span aria-hidden="true">&#8250;</span>
      </button>

      <div className="preview-indicator" role="tablist" aria-label="Preview progress">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={`indicator-${index}`}
            className={`indicator-segment ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </>
  )
}
