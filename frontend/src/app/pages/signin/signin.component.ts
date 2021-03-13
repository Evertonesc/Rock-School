import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { String } from 'src/app/enums/typesEnums';
import { SigninFactory } from './factories/signinFactory';
import { SigninService } from './services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(private signinService: SigninService, private formBuilder: FormBuilder) { }
  signin = SigninFactory.createSigninForm();

  ngOnInit(): void {
    this.signin;
  }

  signinForm = this.formBuilder.group({
    name: [this.signin.name, Validators.required],
    address: this.signin.address
  })

  onSubmmit(): void {
    const nameStudent = this.signinForm.get('name');
    console.warn('Here is your info', this.signinForm.value);
    this.signinForm.reset();
  }
}