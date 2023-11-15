import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabledFormInputComponent } from '../labled-form-input/labled-form-input.component';

@Component({
  selector: 'dietideals24-register-form',
  standalone: true,
  imports: [CommonModule, LabledFormInputComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

}
