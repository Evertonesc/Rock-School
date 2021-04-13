import { StudentDto } from "@/adapters/dtos/studentDto";
import { Student } from "@/domain/core/entities/student";
import { IActionResult } from "../models/action-result.interface";
import { CreateStudentResponse } from "../types/createStudentResponse";

export interface ICreateStudent {
    createStudent(studentDto: StudentDto): Promise<IActionResult<StudentDto>>

    updateStudent(studentDto: StudentDto): Promise<IActionResult<Student>>

    checkIfStudentAlreadyExists(studentDto: StudentDto): Promise<CreateStudentResponse>
}