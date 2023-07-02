import { useState } from 'react';
import { useLoaderData, useActionData } from 'react-router-dom';

import { Streamer } from '../types';
import StreamersList from '../components/streamers-list';
import StreamersForm from '../components/streamers-form';

import './streamers-list-page.scss';
import Message from '../components/message';
import { useEffect } from 'react';

const SteamersListPage = () => {
  const streamers = useLoaderData() as Streamer[];
  const error = useActionData() as Error;
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('');
    }
  }, [error]);

  return (
    <section className="streamers-list-page">
      <div className="streamers-list-page__field">
        <h2 className="title">Add Streamer</h2>
        <StreamersForm />
      </div>
      <div className="streamers-list-page__field">
        <h2 className="title">Streamers list</h2>
        {streamers.length > 0 ? (
          <StreamersList streamers={streamers} />
        ) : (
          <p className="streamers-list-page__text">
            No streamers yet. Add one!
          </p>
        )}
      </div>
      {message.length > 0 && (
        <Message
          text={message}
          type="error"
        />
      )}
    </section>
  );
};

export default SteamersListPage;
