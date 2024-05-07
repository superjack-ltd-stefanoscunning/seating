import { Message } from './message';

export interface ConversationResponse {
  success: boolean;
  model: string;
  messages: Message[];
  error: string;
}
