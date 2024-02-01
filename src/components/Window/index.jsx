import React, { useState } from 'react';
import classNames from 'class-names';
import '98.css';
import './98Overrides.css';

export default function Window(props) {
  const {
    title,
    // maple, lilac, or rose
    theme,
    className,
    children,
    noMargin,
    onMinimize,
    onMaximize,
    onClose,
    ...rest
  } = props;

  const [t] = useState(theme || _.sample(['maple', 'lilac', 'rose']));

  return (
    <div className={classNames('window', t, className)} {...rest}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button
            aria-label={!onMinimize ? 'Minimize' : undefined}
            aria-hidden={!onMinimize}
            disabled={!onMinimize}
            onClick={onMinimize}
          ></button>
          <button
            aria-label={!onMaximize ? 'Maximize' : undefined}
            aria-hidden={!onMaximize}
            disabled={!onMaximize}
            onClick={onMaximize}
          ></button>
          <button
            aria-label={!onClose ? 'Close' : undefined}
            aria-hidden={!onClose}
            disabled={!onClose}
            onClick={onClose}
          ></button>
        </div>
      </div>
      <div className={classNames({ 'window-body': !noMargin })}>{children}</div>
    </div>
  );
}
