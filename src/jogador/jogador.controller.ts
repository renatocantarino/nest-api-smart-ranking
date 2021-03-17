import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CreateDTO } from './dtos/create.dto'
import { JogadorService } from './jogador.service'

@Controller('api/v1/jogador')
export class JogadorController {

    constructor(private readonly jogadorService: JogadorService) { }

    @Get()
    async All() {
        return this.jogadorService.GetAll();
    }

    @Get("byEmail")
    async byEmail(@Query('email') email: string) {
        return this.jogadorService.ByEmail(email);
    }



    @Post()
    async Create(@Body() player: CreateDTO) {        
        this.jogadorService.Create(player);
    }


    @Delete()
    async Remove(@Query('email') email: string) {
        return this.jogadorService.Delete(email);
    }


}
