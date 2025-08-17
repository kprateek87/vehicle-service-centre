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
    async getUser(id: number) {
        const user = await this.prisma.user.findUnique({ where: { id: id.toString() } });
        if (!user) throw new Error("User Not Found")
        return user;
    }
    async addUser(user: UserDto) {
        const addMe = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
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
                    role: Role.ADMIN,
                },
                {
                    name: 'John Mechanic',
                    email: 'mechanic@vsc.com',
                    password: 'hashedpassword2',
                    role: Role.MECHANIC,
                },
                {
                    name: 'Reception Jane',
                    email: 'reception@vsc.com',
                    password: 'hashedpassword3',
                    role: Role.STAFF,
                },
                {
                    name: 'Customer Mark',
                    email: 'customer@vsc.com',
                    password: 'hashedpassword4',
                    role: Role.STAFF,
                },
            ],
        });
    }
}
