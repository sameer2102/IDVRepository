import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "https://weu-api.au10tixservicesstaging.com/cm/v2/documentprocessingrequests";
  header: any = {
    "Authorization": "Bearer eyJraWQiOiI0OW56OENVQXlhandMV1UwNHlLLTF6azE5Z2lYQVZWSmp3WWdsbVhxSXBZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlZRSWNKV2VXMEozZ1B4NklBcWxnaXNXOWdlbklzRGhNSHhTejBicklqY0kiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2MjM2NDI3ODEsImV4cCI6MTYyMzcyOTE4MSwiY2lkIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJzY3AiOlsic2VjdXJlLm1lOnJlcXVlc3QiXSwic3ViIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJhcGlVcmwiOiJodHRwczovL3dldS1hcGkuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImJvc1VybCI6Imh0dHBzOi8vYm9zLXdldS13ZWIuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJhbWRvY3MiLCJjbGllbnRPcmdhbml6YXRpb25JZCI6MzUzfQ.GiGu6kooqp2wAutr1Z7h7CTCBLICjOVgZRqSjQ_7rAFfQMQKHU0tl5zY99Mjpk1q3Y_BTj1W-hJ2zneW4toLe1jNilqc3tEA87eu3t39aMHhPjEWTscQn9QuTuKERtI3CJXQEIir_wXuN5PEFE3R7WbhBSRCjysXgCyWVWhBmuGPxOcqpXRXWxaZv7DizD8CsFAQjgTv2Y-73STm3mzgUltmaQLNDdes-NKN3D8K9G2JYgQ0daejSSNdiJaE7NSh_yhXrLOBuwzH5GblA6FDF9uSXv2TziDz2d-A932prggYzpuYxez2Zv6DyKDfPvWXyvKCJHoP_dmaWrBdBUBqQA",
    "Content-Type": "application/json"
  };
  constructor(private http: HttpClient) {
  }

  authenticate(data): Observable<any> {
    return this.http.post(this.apiUrl,data,{headers:this.header});
  }
}
