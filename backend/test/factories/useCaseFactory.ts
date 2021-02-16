import { CreateStudentUseCase } from "src/use-cases/core/student/createStudentUseCase";

export class UseCasesFactory {
    static createStudentUseCase(): CreateStudentUseCase {
        return new CreateStudentUseCase();
    }
}