import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { Role } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllUsers() {
        const users = await this.prisma.user.findMany();
        return users
    }
    async getUser(username: string) {
        const user = await this.prisma.user.findUnique({ where: { username: username } });
        if (!user) throw new Error("User Not Found")
        return user;
    }
    async addUser(user: UserDto) {
        const addMe = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                username: user.username,
                password: user.password,
                role: user.role
            }
        })
    }
    async createDemoUsers() {
        return await this.prisma.user.createMany({
            data: [
                {
                    name: 'Admin User',
                    email: 'admin@vsc.com',
                    password: 'hashedpassword1',
                    username: 'admin',
                    role: Role.ADMIN,
                },
                {
                    name: 'John Mechanic',
                    email: 'mechanic@vsc.com',
                    username: 'johnmechanic',
                    password: 'hashedpassword2',
                    role: Role.MECHANIC,
                },
                {
                    name: 'Reception Jane',
                    email: 'reception@vsc.com',
                    username: 'janereception',
                    password: 'hashedpassword3',
                    role: Role.STAFF,
                },
                {
                    name: 'Customer Mark',
                    email: 'customer@vsc.com',
                    username: 'mark1',
                    password: 'hashedpassword4',
                    role: Role.STAFF,
                },
            ],
        });
    }
}
