import PlaylistCard from './PlaylistCard'
import PlaylistInfo from './PlaylistInfo'

export default function MusicSection({ playlist }) {
  return (
    <section className="music-section" aria-label="Playlist information">
      <PlaylistCard title={playlist.title} image={playlist.playlistImage} />
      <PlaylistInfo playlist={playlist} />
    </section>
  )
}
