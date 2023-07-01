import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Streamer } from '../types';
import './streamers-list.scss';

interface StreamersListProps {
  streamers: Streamer[];
}

const StreamersList = ({ streamers }: StreamersListProps) => {
  return (
    <ul className="streamers-list">
      {streamers.map((streamer) => (
        <li
          key={streamer.id}
          className="streamers-list__item"
        >
          <img
            src={streamer.imageUri}
            alt={streamer.name}
            className="streamers-list__avatar"
          />
          <div className="streamers-list__name">
            <a
              href={`/streamer/${streamer.id}`}
              className="streamers-list__name-link"
            >
              <span>{streamer.name}</span>
            </a>
          </div>
          <div className="streamers-list__vote">{streamer.voteCount}</div>
          <div className="streamers-list__actions">
            <div className="streamers-list__action up">
              <FontAwesomeIcon
                icon={faCaretUp}
                size="lg"
              />
            </div>
            <div className="streamers-list__action down">
              <FontAwesomeIcon
                icon={faCaretDown}
                size="lg"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StreamersList;
