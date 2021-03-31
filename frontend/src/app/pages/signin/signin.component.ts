import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { String } from 'src/app/enums/typesEnums';
import { SigninFactory } from './factories/signinFactory';
import { SigninService } from './services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(private signinService: SigninService,
    private formBuilder: FormBuilder
  ) { }
  signin = SigninFactory.createSigninForm();

  ngOnInit(): void { }

  signinForm = this.formBuilder.group({
    username: [this.signin.username, Validators.required],
    password: [this.signin.password, Validators.required]
  })

  onSubmit(): void {
  }
}