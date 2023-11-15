import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@Component({
	selector: 'dietideals24-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, LoginPageComponent, RegisterPageComponent],
	template: '<router-outlet></router-outlet>'
})
export class AppComponent {
	
}
