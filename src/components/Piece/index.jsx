import React from 'react';
import './style.css';
import _ from 'lodash';
import classNames from 'class-names';

import Window from '../Window';

export default function Piece(props) {
  const { title, screenshots, className, children } = props;

  return (
    <div className={classNames('piece', className)}>
      <Window title={title}>{children}</Window>
      {screenshots.map((s, i) => (
        <Window
          title={s.title}
          className="screenshot"
          style={{
            animation: 'pixelUpDown 3s alternate infinite ease-in-out',
            animationDelay: `${_.random(-3000, 0)}ms`,
            position: 'absolute',
            top: `${i * 500}px`,
            left: i % 2 === 0 ? `${i * 10}%` : null,
            right: i % 2 === 1 ? `${i * 10}%` : null,
            transform:
              i % 2 === 0
                ? 'translate(-85%, -50%) rotateY(55deg)'
                : 'translate(85%, -50%) rotateY(-55deg)',
          }}
          noMargin
        >
          <img src={s.src} title={s.title} />
        </Window>
      ))}
    </div>
  );
}
