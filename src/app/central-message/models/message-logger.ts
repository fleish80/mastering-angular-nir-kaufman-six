import { Message } from './central-message.types';

export interface MessageLogger {
    logMessage(message: Message): void;
}