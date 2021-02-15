import { Injectable } from "@nestjs/common";
import { StudentDto } from "src/adapters/dtos/studentDto";
import { CreateStudentResponse } from "../types/createStudentResponse";

export interface ICreateStudent {
    createStudent(studentDto: StudentDto): Promise<CreateStudentResponse>

    updateStudent(studentDto: StudentDto): Promise<CreateStudentResponse>

    checkIfStudentAlreadyExists(studentDto: StudentDto): Promise<CreateStudentResponse>
}