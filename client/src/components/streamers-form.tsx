import { useState, ChangeEvent } from 'react';
import { Form } from 'react-router-dom';

import { Platform } from '../types';
import './streamers-form.scss';

const StreamersForm = () => {
  const [name, setName] = useState<string>('');
  const [platform, setPlatform] = useState<Platform>(Platform.Twitch);
  const [description, setDescription] = useState<string>('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePlatformChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlatform(event.target.value as Platform);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <Form
      method="POST"
      className="streamers-form"
    >
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
          name="name"
          className="streamers-form__input"
          value={name}
          onChange={handleNameChange}
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
          name="platform"
          className="streamers-form__select"
          value={platform}
          onChange={handlePlatformChange}
        >
          <option value="Twitch">Twitch</option>
          <option value="Youtube">YouTube</option>
          <option value="TikTok">TikTok</option>
          <option value="Kick">Kick</option>
          <option value="Rumble">Rumble</option>
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
          name="description"
          className="streamers-form__input"
          value={description}
          onChange={handleDescriptionChange}
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
