import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'pj-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	// Lifecycle Hooks
	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			username: [ '', Validators.required ],
			password: [ '', Validators.required ]
		});
	}


	// Component Functionality Methods
	onLogin(): void {
		console.log('login');
	}

	onRegister(): void {
		console.log('register');
	}

}
