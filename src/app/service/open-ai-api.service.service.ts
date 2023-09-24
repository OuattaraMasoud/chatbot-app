import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environement';

@Injectable({
  providedIn: 'root'
})
export class OpenAiApiService {

  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  public sendMessage(message: string) {
    console.error('open ai api service called');
    return this.http.post<any>(`${this.apiUrl}/chat`, { message });
  }
}
