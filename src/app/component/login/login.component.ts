import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm ! : FormGroup;
  message : string = '';

  constructor (private _snackbar: MatSnackBar, private fb: FormBuilder, private api: ApiServiceService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      let username = this.loginForm.value.username
      let password = this.loginForm.value.password

      this.api.login(username, password).subscribe((result:any) => {
        this._snackbar.open(result["message"],"ok");
      })
    }
    else {
      this._snackbar.open("Invalid Credentials","ok")
    }
  }
}
