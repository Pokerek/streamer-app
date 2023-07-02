# Streamer Spotlight Application

This is a simple streamer spotlight application where users can add their favorite streamers and up vote or down vote them. The application consists of a frontend built with React.js and a backend built with Node.js and Express.js. The data is stored in a MongoDB database using Mongoose as the ORM.

## Features

- Users can submit their favorite streamers along with relevant details such as the streamer's name, streaming platform, and description.
- Streamers can be up voted or down voted by other users.
- Real-time updates of the streamer list as new streamers are added and votes are cast.
- Streamer records page displaying the details of a single streamer.

## Technologies Used

- React.js
- React Router
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Socket.io

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- Docker (optional) if you want to run the MongoDB database locally using Docker Compose.

### Installation

1. Clone the repository:

```shell
git clone https://github.com/Pokerek/streamer-app.git
cd streamer-app
```

2. Install the dependencies for both the frontend and backend:

```shell
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd backend
npm install
```

### Configuration

1. Create a `.env` file in the `backend` directory and add the following environment variables or set yourself:

```
DB_USER=admin
DB_PASSWORD=123456
DB_URL=localhost:27017/?authMechanism=DEFAULT
PORT=3000
```

2. Create a `.env` file in the `frontend` directory and add the following environment variable or set yourself:

```
VITE_BACKEND_URL=http://localhost:3000
```

### Database Setup

- If you have Docker installed, you can use the provided `docker-compose.yml` file to run a MongoDB instance locally. In the root directory of the project, run the following command:

```shell
docker-compose up -d
```

- If you don't have Docker, make sure you have MongoDB installed and running on your machine. Update the `DB_URL` in the backend `.env` file with your MongoDB connection URL.

### Starting the Application

1. Start the backend server:

```shell
cd backend
npm start
```

This will start the backend server on `http://localhost:3000` or PORT set in .env file.

2. Start the frontend development server:

```shell
cd frontend
npm start
```

You can now access the application by opening `http://localhost:4173` in your web browser.

## API Endpoints

The backend server exposes the following API endpoints:

- `POST /streamers`: Receives new streamer submissions from the frontend and stores them in the database.

  - Request body:
    ```json
    {
        "name": string,
        "description": string,
        "platform": ["Twitch", "Youtube" ,"TikTok", "Rumble"]
    }
    ```

- `GET /streamers`: Returns all stored streamer submissions in response to a request from the frontend.

- `GET /streamers/:streamerId`: Returns data about a specific streamer.

- `PUT /streamers/:streamerId/vote`: Receives an upvote or downvote for a specific streamer and updates their current upvote/downvote count.

  - Request body:
    ```json
    {
        "isVoteUp": boolean
    }


    ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to modify and enhance this README according to your project's specific details and requirements.
