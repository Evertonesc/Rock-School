import { Student } from "src/domain/entities/student";
import { Instruments } from "src/domain/enums/instruments";
import { IStudent } from "src/domain/interfaces/entities/student.interface";
import { IEmail } from "src/domain/interfaces/valueObejcts/email.interface";
import { IFullName } from "src/domain/interfaces/valueObejcts/fullName.interface";
import { Email } from "src/domain/valueObjects/email";
import { FullName } from "src/domain/valueObjects/fullName";

describe('Student Case', () => {
    test('Valid Email - Should return true...', () => {
        const email: IEmail = Email.create("evertonsouzaesc@gmail.com");
        const emailValidation = email.validate();

        expect(emailValidation).toBe(true);
    })

    test('Valid Fullname - Should return true...', () => {
        const name: IFullName = FullName.create('Everton', 'Costa');

        const nameValidation: boolean = name.validate();

        expect(nameValidation).toBe(true);
    })

    test('Valid Student - Should return true...', () => {
        const studentName: IFullName = FullName.create('Everton', 'Costa');
        const studentEmail: IEmail = Email.create('evertonsouzaesc@gmail.com');
        const studentBirthDate: Date = new Date(1995, 6, 18);
        const studentInstrument: Instruments = Instruments.Guitar;

        const student: IStudent = Student.create(studentName, studentEmail, studentBirthDate, studentInstrument);

        const nameValidation: boolean = studentName.validate();
        const emailValidation: boolean = studentEmail.validate();
        const studentValidation: boolean = student.validate();

        expect(nameValidation).toBe(true);
        expect(emailValidation).toBe(true);
        expect(studentValidation).toBe(true);
    })

    test('Invalid Email - Should return false...', () => {
        var email: IEmail = Email.create("evertondsfsdf.com.br");
        const emailValidation = email.validate();

        expect(emailValidation).toBe(false);
    })

    test('Invalid Name attempts - should return false for all attempts...', () => {
        const invalidNameFirstCase: IFullName = FullName.create('Everton', null);
        const invalidNameSecondCase: IFullName = FullName.create('E', 'df');
        const invalidNameThirdCase: IFullName = FullName.create('5451', '999');

        const firstCaseValidation = invalidNameFirstCase.validate();
        const secondCaseValidation = invalidNameSecondCase.validate();
        const thirdCaseValidation = invalidNameThirdCase.validate();

        expect(firstCaseValidation).toBe(false);
        expect(secondCaseValidation).toBe(false);
        expect(thirdCaseValidation).toBe(false);
    })

    test('Invalid Student - Should return false...', () => {
        const studentName: IFullName = FullName.create('Everton', null);
        const studentEmail: IEmail = Email.create('evertonsouzaes.co');
        const studentBirthDate: Date = new Date(1995, 6, 18);
        const studentInstrument: Instruments = Instruments.Guitar;

        const student: IStudent = Student.create(studentName, studentEmail, studentBirthDate, studentInstrument);

        const nameValidation: boolean = studentName.validate();
        const emailValidation: boolean = studentEmail.validate();
        const studentValidation: boolean = student.validate();

        expect(nameValidation).toBe(false);
        expect(emailValidation).toBe(false);
        expect(studentValidation).toBe(false);
    })
})
