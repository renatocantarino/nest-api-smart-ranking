import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateDTO } from './dtos/create.dto'

@Controller('api/v1/jogador')
export class JogadorController {

    @Get()
    async Obter() {
        return await JSON.stringify({
            "nome": "NestJS"
        })
    }

    @Post()
    async Create(@Body() player: CreateDTO) {

        const { email, fullname, phone } = player;
        return await JSON.stringify({
            "nome": fullname,
            "email": email,
            phone: phone
        });
    }


    @Delete()
    async Remove() {
        return await JSON.stringify({
            "nome": "NestJS"
        })
    }


}
