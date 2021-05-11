export abstract class PropertieValidation {

    isValid: boolean;
    isInvalid: boolean;
    message: string;

    constructor(isValid: boolean, message: string) {
        this.isValid = isValid;
        this.isInvalid = !isValid;
        this.message = message;
    }
}