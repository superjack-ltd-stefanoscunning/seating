import { Message } from './message';

export interface ChatRequest {
  model: string;
  messages: Message[];
}
