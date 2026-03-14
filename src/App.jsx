import { useEffect, useState } from 'react'
import MusicSection from './components/music/MusicSection'
import PreviewSection from './components/preview/PreviewSection'
import playlistData from './data/playlistData'
import './styles/music-ui.css'

function App() {
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0)
  const [direction, setDirection] = useState('next')

  const previewCount = playlistData.previewImages.length

  const showNextPreview = () => {
    setDirection('next')
    setCurrentPreviewIndex((index) => (index + 1) % previewCount)
  }

  const showPreviousPreview = () => {
    setDirection('prev')
    setCurrentPreviewIndex((index) => (index - 1 + previewCount) % previewCount)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection('next')
      setCurrentPreviewIndex((index) => (index + 1) % previewCount)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [previewCount])

  return (
    <div className="app-shell">
      <MusicSection playlist={playlistData} />
      <PreviewSection
        images={playlistData.previewImages}
        currentIndex={currentPreviewIndex}
        direction={direction}
        onPrevious={showPreviousPreview}
        onNext={showNextPreview}
      />
    </div>
  )
}

export default App
