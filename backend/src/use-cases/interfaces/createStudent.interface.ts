import { StudentDto } from "@/adapters/dtos/studentDto";
import { CreateStudentResponse } from "../types/createStudentResponse";

export interface ICreateStudent {
    createStudent(studentDto: StudentDto): Promise<CreateStudentResponse>

    updateStudent(studentDto: StudentDto): Promise<CreateStudentResponse>

    checkIfStudentAlreadyExists(studentDto: StudentDto): Promise<CreateStudentResponse>
}