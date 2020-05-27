export enum MessageType {
    Error, Info, Success
}

export interface Message {
    type: MessageType,
    description: string;
}

export interface CentralMessageConfig {
    enableLoggers: boolean;
}

