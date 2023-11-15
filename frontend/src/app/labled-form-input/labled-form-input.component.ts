import { Component, Input  } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
	selector: 'dietideals24-labled-form-input',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './labled-form-input.component.html',
	styleUrl: './labled-form-input.component.css',
})
export class LabledFormInputComponent {
	
	@Input() public label !: string
	@Input() public type  !: string
	@Input() public value ?: string

	get_value() : string {
		return this.value || ''
	}

	get_label() : string {
		return this.label.toUpperCase()
	}

	get_type() : string {
		return this.type.toLocaleLowerCase()
	}

	get_placeholder() : string {
		return this.label.toLocaleLowerCase()
	}

	get_autocomplete() : string {
		const autocompletes : {[key: string]: string} = {
			'name' : 'name',
			'surname' : 'name',
			'email': 'email',
			'password': 'current-password',
			'confirm password': 'current-password',
			'country': 'address-level1',
			'city': 'address-level2',
			'phone': 'tel',
		}
		return autocompletes[this.label]
	}
}
