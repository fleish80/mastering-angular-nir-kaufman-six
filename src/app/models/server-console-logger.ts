import { Message } from './../central-message/models/central-message.types';
import { MessageLogger } from './../central-message/models/message-logger';

export class ServerConsoleLogger implements MessageLogger {

    logMessage(message: Message): void {
        console.log('send to server', message);
    }

}