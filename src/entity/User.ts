import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinColumn, JoinTable, Unique } from "typeorm"
import { Course } from "./Course"

export enum UserType {ADMIN = "Admin" , STUDENT = "Student", DOCTOR = "Doctor"}

@Entity("User" ,)
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    email: string

    @Column({default: "user"})
    name: string

    @Column({default: "123456789"})
    password: string

    @Column({unique:true})
    university_code: string

    // @Column({unique:true})
    @Column({default:"123"})
    national_id: string

    @Column({
        type: "enum",
        enum: UserType,
        default: UserType.STUDENT,
    })
    type: UserType

    // @OneToMany(type => Course, (course)=> course.doctor)
    // @JoinTable({name:"course_id"})
    // doctorCourses: Course[];

    @ManyToMany(() => Course,(course)=> course.users)
    // @JoinTable({ name: "user_courses" })
    courses: Course[];


    userAnswers: any

}

