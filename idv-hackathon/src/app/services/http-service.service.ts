import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "https://weu-api.au10tixservicesstaging.com/cm/v2/documentprocessingrequests";
  header: any = {
    "Authorization": "Bearer eyJraWQiOiI0OW56OENVQXlhandMV1UwNHlLLTF6azE5Z2lYQVZWSmp3WWdsbVhxSXBZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnJwT2NLRGRld2I1cFBEV3JrZGtMYlY5SnMwUG9fZkxycVNtc3ZtMFJxeWsiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2MjMzMDQyNjYsImV4cCI6MTYyMzM5MDY2NiwiY2lkIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJzY3AiOlsic2VjdXJlLm1lOnJlcXVlc3QiXSwic3ViIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJhcGlVcmwiOiJodHRwczovL3dldS1hcGkuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImJvc1VybCI6Imh0dHBzOi8vYm9zLXdldS13ZWIuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJhbWRvY3MiLCJjbGllbnRPcmdhbml6YXRpb25JZCI6MzUzfQ.ZktOOYz1PQlBjTE3wNTcHBfRtnXLDnsKuqLgqsKXF8HGWFNdaaVyV7aFM97wc7Tr78R5oVFNG9ogbo0L7YleziuR5pX56_9ig3vYsRQ5Fw5TbrkAJXJBONGIUMsPYEmjOBn_X35fqTi1H7kK5JeXSEXi9BzdqmKkvJxDSFcyURlT0L1VIQniqwJFXNaU6AKDwB6zce9CXZOEymDxLSVpxxhuyVPn-2htuIHrWW-0WSOKNbD2H5l031dkTcFxbeQHjyNV_-0tZvDUVVN0gyDdzt8CNHkrRsOTMXTjT9fNCCvP_1BedUitFJzjdosw1EZtwSmfzA8iHizIWZlRcci0-g",
    "Content-Type": "application/json"
  };
  constructor(private http: HttpClient) {
  }

  authenticate(data): Observable<any> {
    return this.http.post(this.apiUrl,data,{headers:this.header});
  }
}
