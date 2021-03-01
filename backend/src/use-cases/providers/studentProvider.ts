import { CreateStudentUseCase } from "../core/student/createStudentUseCase";

export const StudentProvider = {
    provide: 'ICreateStudent',
    useClass: CreateStudentUseCase
}