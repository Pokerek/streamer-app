import { Server } from 'socket.io';

export default class SocketService {
    private static io: Server;

    static init(server: any) {
        this.io = new Server(server, {
            cors: {
                origin: '*',
            }
        });

        this.io.on('connection', (socket: any) => {
            console.log('User connected');
            socket.on('disconnect', () => {
                console.log('User disconnected');
            });
        });
    }

    static emit = (event: string, data: any) => {
        console.log(`Emitting ${event} with data: ${JSON.stringify(data)}`);
        this.io.emit(event, data);
    }
}