import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ProgramModal({ modalData, onClose, onBookProgram }) {
  useEffect(() => {
    if (!modalData) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalData, onClose]);

  if (!modalData) return null;

  return (
    <div className="pr-modal" role="dialog" aria-modal="true" aria-labelledby="pr-modal-title">
      <div className="pr-modal__backdrop" onClick={onClose} />
      <div className="pr-modal__card">
        <button type="button" className="pr-modal__close" aria-label="Close modal" onClick={onClose}>
          <X size={18} />
        </button>

        <span className="eyebrow">{modalData.eyebrow}</span>
        <h3 className="pr-modal__title" id="pr-modal-title">
          {modalData.title}
        </h3>
        <p className="pr-modal__body">{modalData.body}</p>

        <div className="pr-modal__actions">
          {modalData.programTitle && (
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={() => onBookProgram?.(modalData.programTitle)}
            >
              JOIN NOW
            </button>
          )}
          <button type="button" className="btn btn--outline-dark btn--sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
