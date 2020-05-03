import React from 'react';

import './Loading.css';

type LoadingProps = {
  message?: String;
};

/**
 * Displays container with information about loading process.
 */
const Loading: React.FC<LoadingProps> = ({ message = 'Загрузка...' }) => {
  return (
    <div className="loading">
      <span className="loading__message">{message}</span>
    </div>
  );
};

export default Loading;
