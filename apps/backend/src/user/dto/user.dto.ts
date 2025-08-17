import { Role } from "@prisma/client";

export class UserDto {
    name: string;
    email: string;
    password: string;
    role?: Role;
}