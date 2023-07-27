import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm ! : FormGroup;
  message : string = '';

  constructor (private _snackbar: MatSnackBar, private fb: FormBuilder, private api: ApiServiceService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email : ['', [Validators.required, Validators.email]],
      address : ['', [Validators.required]],
      pincode : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      cPassword : ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  signup() {
    if (this.signupForm.valid) {
      let username = this.signupForm.value.username
      let email = this.signupForm.value.email
      let address = this.signupForm.value.address
      let pincode = this.signupForm.value.pincode
      let password = this.signupForm.value.password
      let cPassword = this.signupForm.value.cPassword

      this.api.signup(username, email, address, pincode, password, cPassword).subscribe((result:any) => {
        this._snackbar.open(result["message"],"ok");
        this.signupForm.reset();
      })
    }
    else {
      this._snackbar.open("Invalid Data","ok")
    }
  }

}
