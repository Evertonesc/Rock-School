import { UseCasesFactory } from "../../factories/useCaseFactory";
import { StudentTestData } from "../../helpers/studentDtoTest";

describe('CreateStudentUseCase', () => {
    test('Create Student - Should create a student with success...', async () => {
        const studentDto = StudentTestData.createValidDto();
        const studentUseCase = UseCasesFactory.createStudentUseCase();
        const useCaseResponse = await studentUseCase.createStudent(studentDto);
    })
})
