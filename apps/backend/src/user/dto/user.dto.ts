import { Role } from "@prisma/client";

export class UserDto {
    name: string;
    email: string;
    password: string;
    username: string;
    role?: Role;
}