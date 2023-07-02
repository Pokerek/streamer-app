import { useState, useEffect } from 'react';
import { useLoaderData, useActionData } from 'react-router-dom';
import io from 'socket.io-client';

import { Streamer } from '../types';
import { BACKEND_URL } from '../constants';
import StreamersList from '../components/streamers-list';
import StreamersForm from '../components/streamers-form';
import Message from '../components/message';

import './streamers-list-page.scss';

const socket = io(BACKEND_URL);

const SteamersListPage = () => {
  const streamersLoader = useLoaderData() as Streamer[];
  const [streamers, setStreamers] = useState<Streamer[]>(streamersLoader);
  const error = useActionData();
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    socket.on('streamer-created', (streamer: Streamer) => {
      setStreamers((prevStreamers) => [...prevStreamers, streamer]);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('streamer-voted', ({ id, isVoteUp }) => {
      const updatedStreamers = streamers.map((streamer) => {
        if (streamer.id === id) {
          return {
            ...streamer,
            voteCount: isVoteUp
              ? streamer.voteCount + 1
              : streamer.voteCount - 1
          };
        }
        return streamer;
      });

      setStreamers(updatedStreamers);
    });
  }, [streamers]);

  useEffect(() => {
    console.log('error', error);
    if (error instanceof Error) {
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
