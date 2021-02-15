import { StudentDto } from "src/adapters/dtos/studentDto";

function returnValidStudentDto(): StudentDto {
    const validStudentDto: StudentDto = {
        firstName: 'Sasuke',
        lastName: 'Uchiha',
        email: 'betrayer@akatsuki.com.br',
        birthDate: new Date(1995, 6, 18),
        instrument: 1,
    }
    return validStudentDto;
}