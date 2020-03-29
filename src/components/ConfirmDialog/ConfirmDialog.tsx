import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

type ConfirmDialogProps = {
  /** Confirm dialog message */
  message: string;
  /** Callback, that will be fired when YES button is clicked */
  onConfirm: () => void;
  /** Callback, that will be fired when NO button is clicked */
  onCancel: () => void;
  /** "Yes" button text */
  yesButton?: string;
  /** "No" button text */
  noButton?: string;
  /** Time for opening/closing the dialog */
  animationDuration?: number;
};

/**
 * Confirm dialog.
 */
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  message,
  onConfirm,
  onCancel,
  yesButton = 'Да',
  noButton = 'Нет',
  animationDuration = 400
}) => {
  const [result, setResult] = useState<boolean>();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (result === undefined) return;
    setClosing(true);

    const timeout = setTimeout(() => {
      if (result) {
        onConfirm();
      } else {
        onCancel();
      }
    }, animationDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [result, onCancel, onConfirm, animationDuration]);

  return (
    <>
      <div
        className={classNames('popup-background', {
          'popup-background_closing': closing
        })}
        style={{ animationDuration: `${animationDuration}ms` }}
      />
      <div
        className={classNames('alert', { alert_closing: closing })}
        style={{ animationDuration: `${animationDuration}ms` }}
      >
        <p className="alert__message">{message}</p>

        <div className="alert__buttons-list">
          <button
            type="button"
            className="alert__button alert__button_main"
            onClick={setResult.bind(null, false)}
            data-testid="no-button"
          >
            {noButton}
          </button>
          <button
            type="button"
            className="alert__button"
            onClick={setResult.bind(null, true)}
            data-testid="yes-button"
          >
            {yesButton}
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDialog;
