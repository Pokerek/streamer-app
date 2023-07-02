import { useEffect, useState } from 'react';

import './message.scss';

interface MessageProps {
  text: string;
  type?: 'error' | 'success';
}

const Message = ({ text, type }: MessageProps) => {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
  }, []);

  let classes = 'message';
  if (display) {
    classes += ' message--visible';
  }

  switch (type) {
    case 'error':
      classes += ' message--error';
      break;

    case 'success':
      classes += ' message--success';
      break;

    default:
      break;
  }

  return (
    <div className={classes}>
      <p className="message__text">{text}</p>
    </div>
  );
};

export default Message;
