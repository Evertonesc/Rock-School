import { Student } from "@/domain/core/entities/student";
import { IStudent } from "@/domain/core/interfaces/entities/student.interface";
import { IEmail } from "@/domain/core/interfaces/valueObejcts/email.interface";
import { IFullName } from "@/domain/core/interfaces/valueObejcts/fullName.interface";
import { Courses } from "@/domain/enums/courses";
import { Email } from "@/domain/valueObjects/email";
import { FullName } from "@/domain/valueObjects/fullName";


describe('Student Case', () => {
    test('Valid Email - Should return true...', () => {
        const email: IEmail = Email.create("evertonsouzaesc@gmail.com");
        const emailValidation = email.validate().isValid;

        expect(emailValidation).toBe(true);
    })

    test('Valid Fullname - Should return true...', () => {
        const name: IFullName = FullName.create('Everton', 'Costa');

        const nameValidation: boolean = name.validate().isValid;

        expect(nameValidation).toBe(true);
    })

    test('Valid Student - Should return true...', () => {
        const studentName: IFullName = FullName.create('Everton', 'Costa');
        const studentEmail: IEmail = Email.create('evertonsouzaesc@gmail.com');
        const studentBirthDate: Date = new Date(1995, 6, 18);
        const studentCourse: Courses = Courses.Guitar;

        const student: IStudent = Student.create(studentName, studentEmail, studentBirthDate, studentCourse);

        const nameValidation: boolean = studentName.validate().isValid;
        const emailValidation: boolean = studentEmail.validate().isValid;
        const studentValidation: boolean = student.validate().isValid;

        expect(nameValidation).toBe(true);
        expect(emailValidation).toBe(true);
        expect(studentValidation).toBe(true);
    })

    test('Invalid Email - Should return false...', () => {
        var email: IEmail = Email.create("evertondsfsdf.com.br");
        const emailValidation = email.validate().isValid;

        expect(emailValidation).toBe(false);
    })

    test('Invalid Name attempts - should return false for all attempts...', () => {
        const invalidNameFirstCase: IFullName = FullName.create('Everton', null);
        const invalidNameSecondCase: IFullName = FullName.create('E', 'df');
        const invalidNameThirdCase: IFullName = FullName.create('5451', '999');

        const firstCaseValidation = invalidNameFirstCase.validate().isValid;
        const secondCaseValidation = invalidNameSecondCase.validate().isValid;
        const thirdCaseValidation = invalidNameThirdCase.validate().isValid;

        expect(firstCaseValidation).toBe(false);
        expect(secondCaseValidation).toBe(false);
        expect(thirdCaseValidation).toBe(false);
    })

    test('Invalid Student - Should return false...', () => {
        const studentName: IFullName = FullName.create('Everton', null);
        const studentEmail: IEmail = Email.create('evertonsouzaes.co');
        const studentBirthDate: Date = new Date(1995, 6, 18);
        const studentCourse: Courses = Courses.Guitar;

        const student: IStudent = Student.create(studentName, studentEmail, studentBirthDate, studentCourse);

        const nameValidation: boolean = studentName.validate().isValid;
        const emailValidation: boolean = studentEmail.validate().isValid;
        const studentValidation: boolean = student.validate().isValid;

        expect(nameValidation).toBe(false);
        expect(emailValidation).toBe(false);
        expect(studentValidation).toBe(false);
    })
})
