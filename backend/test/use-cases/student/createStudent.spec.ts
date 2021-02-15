import { IFullName } from "src/domain/interfaces/valueObejcts/fullName.interface"
import { FullName } from "src/domain/valueObjects/fullName"
import { CreateStudentUseCase } from "src/use-cases/core/student/createStudentUseCase";

describe('CreateStudentUseCase', () => {
    test('Create Student - Should create a student with success...', () => {
        const fullName: IFullName = FullName.create('Edward', 'Erick');
        let createStudentUseCase = new CreateStudentUseCase();        
    })
})
