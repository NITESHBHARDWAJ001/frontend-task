function ControlButton({ label, children }) {
  return (
    <button className="icon-button" type="button" aria-label={label}>
      {children}
    </button>
  )
}

function PlayButton() {
  return (
    <button className="play-button" type="button" aria-label="Play playlist">
      <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
        <path d="M8 5.5v13l10-6.5L8 5.5z" fill="currentColor" />
      </svg>
    </button>
  )
}

export default function Controls() {
  return (
    <div className="controls-row">
      <PlayButton />
      <ControlButton label="Save playlist">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4.2L5 21V4.5a1 1 0 0 1 1-1z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </ControlButton>
      <ControlButton label="Add to playlist">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </ControlButton>
      <ControlButton label="Share playlist">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            d="M15 7l4-4m0 0v4m0-4h-4M19 13v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ControlButton>
      <ControlButton label="More options">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <circle cx="5" cy="12" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="19" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </ControlButton>
    </div>
  )
}
