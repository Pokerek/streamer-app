import { Form } from 'react-router-dom';

import './streamers-form.scss';

const StreamersForm = () => {
  return (
    <Form className="streamers-form">
      <div className="streamers-form__field">
        <label
          htmlFor="name"
          className="streamers-form__label"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="streamers-form__input"
        />
      </div>
      <div className="streamers-form__field">
        <label
          htmlFor="platform"
          className="streamers-form__label"
        >
          Platform
        </label>
        <select
          id="platform"
          className="streamers-form__select"
        >
          <option value="twitch">Twitch</option>
          <option value="youtube">YouTube</option>
          <option value="tiktok">TikTok</option>
          <option value="kick">Kick</option>
          <option value="rumble">Rumble</option>
        </select>
      </div>
      <div className="streamers-form__field">
        <label
          htmlFor="description"
          className="streamers-form__label"
        >
          Description
        </label>
        <textarea
          id="description"
          className="streamers-form__input"
        />
      </div>
      <button
        type="submit"
        className="streamers-form__submit"
      >
        Add
      </button>
    </Form>
  );
};

export default StreamersForm;
