import { useLoaderData } from 'react-router-dom';

import { Streamer } from '../types';
import StreamersList from '../components/streamers-list';
import StreamersForm from '../components/streamers-form';

import './streamers-list-page.scss';

const SteamersListPage = () => {
  const streamers = useLoaderData() as Streamer[];

  return (
    <section className="streamers-list-page">
      <div className="streamers-list-page__field">
        <h2 className="title">Add Streamer</h2>
        <StreamersForm />
      </div>
      <div className="streamers-list-page__field">
        <h2 className="title">Streamers list</h2>
        <StreamersList streamers={streamers} />
      </div>
    </section>
  );
};

export default SteamersListPage;
