import { AbstractCentralMessage } from '../models/abstract-central-message';
import { Message } from '../models/central-message.types';

export class CustomMessageService extends AbstractCentralMessage {

    constructor() {
        super();
    }

    setMessage(message: Message): void {
        alert('no Component for you!');
    }

    removeMessage(message: Message): void {
    }
}