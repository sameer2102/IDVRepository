import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "https://weu-api.au10tixservicesstaging.com/cm/v2/documentprocessingrequests";
  header: any = {
    "Authorization": "Bearer eyJraWQiOiI0OW56OENVQXlhandMV1UwNHlLLTF6azE5Z2lYQVZWSmp3WWdsbVhxSXBZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkRqNkxpMExlT0VTQXh2RTN2R2dqeGNydThndUhTVUpSVnpBTkd0VThKNmsiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2MjMzOTEwNjEsImV4cCI6MTYyMzQ3NzQ2MSwiY2lkIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJzY3AiOlsic2VjdXJlLm1lOnJlcXVlc3QiXSwic3ViIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJhcGlVcmwiOiJodHRwczovL3dldS1hcGkuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImJvc1VybCI6Imh0dHBzOi8vYm9zLXdldS13ZWIuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJhbWRvY3MiLCJjbGllbnRPcmdhbml6YXRpb25JZCI6MzUzfQ.M_70Or1xxnXQQxEmDkDDB6UjOIp1nRnyxGhhosy9m-s8s51t4xLE9Ahyb2pvikQMkyQXnByOniL-ADlRPeEUQtAOxjK-dc0wIBPPAlTx4Tw0yhpZvrPJfjU99gOEHJgb-HOpOCl5ryH7cvmfoJtOC7_RgCUXXiqllB26upOR6fhMoa7xXCnb1PUUMu0QBI2s0Z3CL9BcE66Nk3DTEsxUgHFBlszRU0hyHqEmDdtesj3WlYMn229oDg8dvra249jLLt5lrmWZiVRSmcewr1rMoq-u7s9H958YC1Fpkj6O_JDAZWzko_HW-Eee7O3iYQeFjYAaAAzrjE-Cvjg8PHzGSg",
    "Content-Type": "application/json"
  };
  constructor(private http: HttpClient) {
  }

  authenticate(data): Observable<any> {
    return this.http.post(this.apiUrl,data,{headers:this.header});
  }
}
