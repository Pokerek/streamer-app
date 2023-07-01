import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Streamer } from '../types';
import './streamers-list.scss';
import { useSubmit } from 'react-router-dom';

interface StreamersListProps {
  streamers: Streamer[];
}

const StreamersList = ({ streamers }: StreamersListProps) => {
  const submit = useSubmit();

  const handleUpVote = (id: string) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('vote', 'up');

    submit(formData, {
      method: 'PUT'
    });
  };

  const handleDownVote = (id: string) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('vote', 'down');

    submit(formData, {
      method: 'PUT'
    });
  };

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
            <div
              className="streamers-list__action up"
              onClick={() => handleUpVote(streamer.id)}
            >
              <FontAwesomeIcon
                icon={faCaretUp}
                size="lg"
              />
            </div>
            <div
              className="streamers-list__action down"
              onClick={() => handleDownVote(streamer.id)}
            >
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
