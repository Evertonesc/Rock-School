import { FormBuilder, Validators } from "@angular/forms";

export class SignUpDto {

    static create(formBuilder: FormBuilder) {
        return formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            birthDate: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            instrumentsArray: [null, Validators.required]
        })
    }
}