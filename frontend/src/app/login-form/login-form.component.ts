import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabledFormInputComponent } from '../labled-form-input/labled-form-input.component';

@Component({
  selector: 'dietideals24-login-form',
  standalone: true,
  imports: [CommonModule, LabledFormInputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
