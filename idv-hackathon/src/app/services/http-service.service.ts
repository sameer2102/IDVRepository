import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "https://weu-api.au10tixservicesstaging.com/cm/v2/documentprocessingrequests";
  header: any = {
    "Authorization": "Bearer eyJraWQiOiI0OW56OENVQXlhandMV1UwNHlLLTF6azE5Z2lYQVZWSmp3WWdsbVhxSXBZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjQ2NWZNSTdaZTZxVFNjQ0h0UW1WU3ZjcURZTlVhd1hPRlJyTU90LUpKUGciLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2MjMxNjY3MDAsImV4cCI6MTYyMzI1MzEwMCwiY2lkIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJzY3AiOlsic2VjdXJlLm1lOnJlcXVlc3QiXSwic3ViIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJhcGlVcmwiOiJodHRwczovL3dldS1hcGkuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImJvc1VybCI6Imh0dHBzOi8vYm9zLXdldS13ZWIuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJhbWRvY3MiLCJjbGllbnRPcmdhbml6YXRpb25JZCI6MzUzfQ.AajWVm7gB-nSmIIX7uj25lFCk-JLmCarvhm2gOsIOSujh2dPUXz-ZK6eElR3yp9YiaDcnmxOBcpMJ7erlV9cO4JkhWsWqt1DyGqej7ZqDQz6Kqx_87dUOvtVv2mRB37mxfWmrPS2TWuMSSy6KQ0vAqWWpmZ2T8zs2AYhwK3SnVd8YV0Rf1ejLJU67S0A7p9UFUi56egvlomdN9fBLZaltkx0YgglWajUxdheV2ziHXrMWR2aK4DvYFYl3XZMr6x1Q6X1Xx3uwXcxZGx_tkm0qI2yZuB-vaU9cW4I57LvkwaM9xotLlkySvqXbYv7hfINtCH-ArINt1yLnfAewYUOLA",
    "Content-Type": "application/json"
  };
  constructor(private http: HttpClient) {
  }

  authenticate(data): Observable<any> {
    return this.http.post(this.apiUrl,data,{headers:this.header});
  }
}
