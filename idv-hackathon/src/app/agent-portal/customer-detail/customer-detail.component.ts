import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  detailsGroup: FormGroup;
  showError:boolean=false;
  gotSuccess:boolean=false;
  callCompleted:boolean=false
  constructor(private httpService:HttpServiceService) { }

  ngOnInit(): void {
    this.detailsGroup = new FormGroup({
      'firstName':new FormControl(null),
      'lastName':new FormControl(null),
      'telNumber': new FormControl('+44', [Validators.required,this.validatePhone]),
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

  validatePhone(control: FormControl): { [s: string]: boolean } {


    let value:string=control.value;
    if(value.length < 11 || (!value.startsWith('+'))){
      return {'phoneNumber':true};
    }else{
      console.log('in Validation');
      return null;
    }
  }
}
