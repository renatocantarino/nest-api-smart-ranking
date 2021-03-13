import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateDTO } from './dtos/create.dto'
import { JogadorService } from './jogador.service'

@Controller('api/v1/jogador')
export class JogadorController {


    constructor(private readonly jogadorService: JogadorService) { }



    @Get()
    async Obter() {
       return this.jogadorService.GetAll();
    }

    @Post()
    async Create(@Body() player: CreateDTO) {
        this.jogadorService.Create(player);
    }


    @Delete()
    async Remove() {
        return await JSON.stringify({
            "nome": "NestJS"
        })
    }


}
