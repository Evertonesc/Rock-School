import { StudentDto } from "@/adapters/dtos/studentDto";
import { Student } from "@/domain/entities/student";
import { IHttpResponse } from "@/domain/validations/httpResponse";
import { CreateStudentResponse } from "../types/createStudentResponse";

export interface ICreateStudent {
    createStudent(studentDto: StudentDto): Promise<IHttpResponse<Student>>

    updateStudent(studentDto: StudentDto): Promise<IHttpResponse<Student>>

    checkIfStudentAlreadyExists(studentDto: StudentDto): Promise<CreateStudentResponse>
}