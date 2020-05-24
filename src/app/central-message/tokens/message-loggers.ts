import { MessageLogger } from './../models/message-logger';
import { InjectionToken } from '@angular/core';

export const MESSAGE_LOGGERS = new InjectionToken<MessageLogger>('Logic for logging messages');