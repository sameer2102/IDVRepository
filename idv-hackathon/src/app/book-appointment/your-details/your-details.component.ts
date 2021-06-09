
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-your-details',
  templateUrl: './your-details.component.html',
  styleUrls: ['./your-details.component.css']
})
export class YourDetailsComponent implements OnInit {
  detailsGroup: FormGroup;
  showError:boolean=false;
  gotSuccess:boolean=false;
  callCompleted:boolean=false
  constructor(private httpService:HttpServiceService) { }

  ngOnInit(): void {
    this.detailsGroup = new FormGroup({
      'firstName':new FormControl(null),
      'lastName':new FormControl(null),
      'telNumber':new FormControl('+44',[Validators.required]),
      'email':new FormControl('my@email.com',Validators.email),
      'canHelp':new FormControl('Store Visit')
    });
  }


  onSubmit(){
    if(this.detailsGroup.valid){
      // alert("This information will be send through REST.\nFirst Name"+this.detailsGroup.controls.firstName.value+"\nLast Name:"+
      // this.detailsGroup.controls.lastName.value+ "\nTelephone Number:"+this.detailsGroup.controls.telNumber.value+"\nEmail:"
      // +this.detailsGroup.controls.telNumber.value+"How can we help:"+this.detailsGroup.controls.canHelp.value);
      this.showError=false;
      this.getAuthenticate();
    }else{
      this.showError=true;
    }
  }


  getAuthenticate(){

    let data:any={
      "consumer": {
          "phoneNumber": this.detailsGroup.controls.telNumber.value
        },
        "processingFlow": "idv",
        "requestTypes": {
          "idFront": [
            "camera"
          ],
          "faceCompare": [
            "camera"
          ]
        },
        "sendSms": true,
        "shortUrl": true
      };


      this.httpService.authenticate(data).subscribe((response)=>{
        this.callCompleted=true;
        console.log(response);
        if(response.id){
          this.gotSuccess=true;
          console.log("Done");
        }
      },(response)=>{
        this.gotSuccess=false;
        this.callCompleted=true;
        console.log("SAMSAMAMSMAS",response);

      }

      );
  }

}
