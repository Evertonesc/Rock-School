import { StudentDto } from "@/adapters/dtos/studentDto";

export class StudentTestData {

    static createValidDto() {
        const validStudentDto: StudentDto = {
            firstName: 'Sasuke',
            lastName: 'Uchiha',
            email: 'betrayer@akatsuki.com.br',
            password: '123456',
            birthDate: new Date(1995, 6, 18),
            instrumentsArray: [1],
        }
        return validStudentDto;
    }
}