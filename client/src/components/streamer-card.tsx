import { Streamer } from '../types';

import './streamer-card.scss';

interface StreamerCardProps {
  streamer: Streamer;
}

const StreamerCard = ({ streamer }: StreamerCardProps) => {
  return (
    <div className="streamer-card">
      <img
        className="streamer-card__image"
        src={streamer.imageUri}
        alt={streamer.name}
      />
      <div className="streamer-card__info">
        <h2 className="streamer-card__name">
          <span className="streamer-card__label">Name: </span>
          {streamer.name}
        </h2>
        <p className="streamer-card__text">
          <span className="streamer-card__label">Description: </span>
          {streamer.description}
        </p>
        <p className="streamer-card__text">
          <span className="streamer-card__label">Platform: </span>
          {streamer.platform}
        </p>
      </div>
    </div>
  );
};

export default StreamerCard;
