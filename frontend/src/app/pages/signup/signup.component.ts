import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { instruments } from './models/components/instruments.select';
import { SignUpDto } from './models/forms/signup.form';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _signupService: SignupService) { }

  ngOnInit(): void { }

  musicalInstruments = instruments;
  signupForm = SignUpDto.create(this.formBuilder);

  onSubmit() {
    this._signupService.registerStudent(this.signupForm);
  }
}