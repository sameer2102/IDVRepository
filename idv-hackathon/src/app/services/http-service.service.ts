import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "https://weu-api.au10tixservicesstaging.com/cm/v2/documentprocessingrequests";
  header: any = {
    "Authorization": "Bearer eyJraWQiOiI0OW56OENVQXlhandMV1UwNHlLLTF6azE5Z2lYQVZWSmp3WWdsbVhxSXBZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnVZZklfQWhuN1AzaWRPUUFacWlOWkpaREhVV1dtSDRnemlBZWhNeUFaVjAiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2MjMyNDk3MjcsImV4cCI6MTYyMzMzNjEyNywiY2lkIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJzY3AiOlsic2VjdXJlLm1lOnJlcXVlc3QiXSwic3ViIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJhcGlVcmwiOiJodHRwczovL3dldS1hcGkuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImJvc1VybCI6Imh0dHBzOi8vYm9zLXdldS13ZWIuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJhbWRvY3MiLCJjbGllbnRPcmdhbml6YXRpb25JZCI6MzUzfQ.HDVvULeVo8r4AyG2ZLkFtcBr47IpOPaRinJv3FtTyG-JuAy8GhbjPDrvTUbBR5P0ImNlRcBO9K0rfMdrf2GByaZEjhKhqypFcRaZQMMpVOPFXAPbk70XNowUlM1FNZVJ8xg2mKK_M0BKqn9lTYsPKXFZwPNu93FKwI0ygqUdRBBV9IZrCI1zu9TYSKlHdRlSi-vmrJaNU5f_vUE7eXYakUC17LBZpYG0fQ0XE_3TbN5hgOhCEhaLwJ4KPLyH6elTRZU2ylUVWIDUdEV2LtxVxmZ_hPlMaI1gSEm7Zjt9FHiXGF5IJ33O27bcBbaRMVskIQ453zFOKFVjTYO3R9PfxA",
    "Content-Type": "application/json"
  };
  constructor(private http: HttpClient) {
  }

  authenticate(data): Observable<any> {
    return this.http.post(this.apiUrl,data,{headers:this.header});
  }
}
