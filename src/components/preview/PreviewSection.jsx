import ImageNavigation from './ImageNavigation'
import ImagePreview from './ImagePreview'

export default function PreviewSection({
  images,
  currentIndex,
  direction,
  onPrevious,
  onNext,
}) {
  return (
    <section className="preview-section" aria-label="Preview image viewer">
      <div className="preview-card">
        <ImagePreview
          src={images[currentIndex]}
          alt={`Preview ${currentIndex + 1}`}
          direction={direction}
        />

        <ImageNavigation
          currentIndex={currentIndex}
          total={images.length}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </section>
  )
}
