import { StudentDto } from "@/adapters/dtos/studentDto";
import { IActionResult } from "../models/action-result.interface";

export interface ICreateStudent {
    createStudent(studentDto: StudentDto): Promise<IActionResult<StudentDto>>
}