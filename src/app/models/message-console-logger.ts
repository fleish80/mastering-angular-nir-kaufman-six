import { Message } from './../central-message/models/central-message.types';
import { MessageLogger } from './../central-message/models/message-logger';

export class MessageConsoleLogger implements MessageLogger {

    logMessage(message: Message): void {
        console.log('MY CUSTOM CONSOLE LOGGER', message);
    }

}