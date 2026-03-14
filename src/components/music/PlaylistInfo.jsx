import Controls from './Controls'

export default function PlaylistInfo({ playlist }) {
  return (
    <div className="playlist-info">
      <h1 className="playlist-title">{playlist.title}</h1>
      <p className="playlist-meta">
        <span>By {playlist.author}</span>
        <span className="meta-dot">•</span>
        <span>{playlist.year}</span>
        <span className="meta-dot">•</span>
        <span>{playlist.songs} songs</span>
        <span className="meta-dot">•</span>
        <span>{playlist.duration}</span>
      </p>

      <Controls />

      <div className="tag-list">
        {playlist.tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
