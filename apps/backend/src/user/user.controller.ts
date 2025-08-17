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


    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.userService.getUser(id)
        }
        catch (e) {
            throw new NotFoundException(e.message)
        }
    }
}
