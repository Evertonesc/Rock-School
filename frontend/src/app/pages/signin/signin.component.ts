import { Component, OnInit } from '@angular/core';
import { SigninService } from './services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private signinService: SigninService) { }

  ngOnInit(): void {
  }

}
