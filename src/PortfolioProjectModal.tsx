import { useEffect, useRef, useState } from 'react'

type PortfolioProjectModalProps = {
  isOpen: boolean
  pages: string[]
  projectTitle: string
  onClose: () => void
}

type PortfolioPageImageProps = {
  alt: string
  src: string
}

function PortfolioPageImage({ alt, src }: PortfolioPageImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <figure className="portfolio-page-frame">
      {!isLoaded && <div className="portfolio-page-loading">Loading page...</div>}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </figure>
  )
}

function PortfolioProjectModal({
  isOpen,
  pages,
  projectTitle,
  onClose,
}: PortfolioProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="portfolio-modal-backdrop" onClick={onClose}>
      <div
        className="portfolio-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="portfolio-modal-header">
          <div>
            <p className="portfolio-modal-eyebrow">Project Viewer</p>
            <h2 id="portfolio-modal-title">{projectTitle}</h2>
          </div>
          <div className="portfolio-modal-actions">
            <span className="portfolio-page-count">
              {pages.length} {pages.length === 1 ? 'page' : 'pages'}
            </span>
            <button
              className="portfolio-close-button"
              type="button"
              onClick={onClose}
              ref={closeButtonRef}
            >
              Close
            </button>
          </div>
        </header>

        <div className="portfolio-document-area">
          <div className="portfolio-pages">
            {pages.map((page, index) => (
              <PortfolioPageImage
                alt={`${projectTitle} project - page ${index + 1} of ${pages.length}`}
                key={page}
                src={page}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioProjectModal
