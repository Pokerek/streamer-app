import { useLoaderData, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import { Streamer } from '../types';
import StreamerCard from '../components/streamer-card';

import './streamer-detail-page.scss';

const SteamerDetailPage = () => {
  const streamer = useLoaderData() as Streamer;

  return (
    <section className="streamer-detail-page">
      <StreamerCard streamer={streamer} />
      <Link
        to="/streamers"
        className="streamer-detail-page__back-button"
      >
        <FontAwesomeIcon
          icon={faLeftLong}
          size="lg"
        />
      </Link>
    </section>
  );
};

export default SteamerDetailPage;
