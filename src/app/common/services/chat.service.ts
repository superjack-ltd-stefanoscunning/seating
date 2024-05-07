import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ChatRequest, ChatResponse, ConversationResponse } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  public chat(message: string): Observable<string> {
    const msg = this.executeChat(message);
    const msgObs = from(msg);
    return msgObs;
  }

  public executeChat(query: string): Observable<any> {
    return this.http.post(
      'https://localhost:5063/AskChatGPT',
      JSON.stringify(query),
      httpOptions
    );
  }

  public sendChat(query: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(
      'https://localhost:5063/AskChatGPT',
      query,
      httpOptions
    );
  }

  public sendConversation(
    chatRequest: ChatRequest
  ): Observable<ConversationResponse> {
    return this.http.post<ConversationResponse>(
      'https://localhost:5063/ConversationChatGPT',
      chatRequest,
      httpOptions
    );
  }
}
