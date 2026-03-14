export default function PlaylistCard({ title, image }) {
  return (
    <div className="playlist-card" aria-label={`${title} cover art`}>
      <img src={image} alt={`${title} cover`} className="playlist-cover" />
    </div>
  )
}
