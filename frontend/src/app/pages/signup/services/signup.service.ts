import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  registerStudent(signupForm: FormGroup) {
    const signupDto = signupForm.value;

    const response = this.http.post('localhost:3000/v1/student', JSON.stringify(signupDto));
    const result = response;
  }
}
