import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Get('demo')
    async createDemoUsers() {
        await this.userService.createDemoUsers();
        return { message: "Demo users added" }
    }
    @Post()
    addUser(@Body() user: UserDto) {
        return this.userService.addUser(user)
    }


    @Get(':username')
    getUser(@Param('username') username: string) {
        try {
            return this.userService.getUser(username)
        }
        catch (e) {
            throw new NotFoundException(e.message)
        }
    }
}
