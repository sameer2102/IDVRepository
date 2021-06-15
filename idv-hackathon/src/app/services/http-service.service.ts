import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "https://weu-api.au10tixservicesstaging.com/cm/v2/documentprocessingrequests";
  header: any = {
    "Authorization": "Bearer eyJraWQiOiI0OW56OENVQXlhandMV1UwNHlLLTF6azE5Z2lYQVZWSmp3WWdsbVhxSXBZIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULm81ZGoyNVV3VlpVUWtHXzFvQ0kxSU5lSGEta05zSy1VMDJjbkk5Qk1Dd0UiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2MjM3MzQ2OTQsImV4cCI6MTYyMzgyMTA5NCwiY2lkIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJzY3AiOlsic2VjdXJlLm1lOnJlcXVlc3QiXSwic3ViIjoiMG9hOXZpYXViZGJxMFdkWFczNTciLCJhcGlVcmwiOiJodHRwczovL3dldS1hcGkuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImJvc1VybCI6Imh0dHBzOi8vYm9zLXdldS13ZWIuYXUxMHRpeHNlcnZpY2VzLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJhbWRvY3MiLCJjbGllbnRPcmdhbml6YXRpb25JZCI6MzUzfQ.fB95URCTqaKeE_v90EZyqlK5XXuth0Ue-cfia3COfDU3nC6JLovzN15BzoWQcj2dvGslu4h4ua-92OaNA0ajyQ9SAo7gpUYkn0ExCn_uqtugE0kF634oLDpO7Q1eMQrDvyEgOK7XsbJ7E03isw1X5YXjICkyxblAYrC9AUZbF2Mc8sLHyHs3ZUgNWAu6mXXYFgVYK_VQIQQqJaFCR0So8QuYa7gexP6ASt3TtXEh5oaKTVOaG5UPt1iskRieWgOd7RKpn7GVcX4n4N8Pca1z6zVWn_JPX41DiXsNC5ZEGkyTPMgKyrH5vYRVm7p3pNumVMSSYg5igjfUbtnnYBl6xg",
    "Content-Type": "application/json"
  };
  constructor(private http: HttpClient) {
  }

  authenticate(data): Observable<any> {
    return this.http.post(this.apiUrl,data,{headers:this.header});
  }
}
