import { Link } from 'react-router-dom';

import './error-page.scss';

const ErrorPage = () => {
  return (
    <section className="error-page">
      <h2 className="title">Something went wrong</h2>
      <Link
        to="/streamers"
        className="error-page__link"
      >
        Go back to streamer list
      </Link>
    </section>
  );
};

export default ErrorPage;
