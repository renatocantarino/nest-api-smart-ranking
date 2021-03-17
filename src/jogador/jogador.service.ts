import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateDTO } from './dtos/create.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadorService {

    private jogadores: Jogador[] = []
    private readonly logger = new Logger(JogadorService.name);
    async Create(player: CreateDTO): Promise<void> {
        this.logger.warn(player)
        const { email } = player;

        const jogador = await this.jogadores.find(jg => jg.email === email);
        jogador ? this.Edit(jogador, player) : this.criar(player)
    }


    async criar(player: CreateDTO) {
        const { email, fullname, phone } = player;
        const _player: Jogador = {
            _id: uuidv4(),
            avatar: "google/images/player1",
            email: email,
            fullname: fullname,
            phone: phone
        };

        await this.jogadores.push(_player);
    }

    async Edit(jogador: Jogador, player: CreateDTO): Promise<void> {
        const { fullname } = player;

        jogador.fullname = fullname;
    }


    async ByEmail(email: string): Promise<Jogador> {
        const player = await this.jogadores.find(x => x.email === email);
        if (!player)
            throw new NotFoundException("Not found")

        return player
    }

    async GetAll(): Promise<Jogador[]> {
        return await this.jogadores;
    }

    async Delete(email: string): Promise<void> {
        const player = await this.jogadores.findIndex(x => x.email === email);
        if (player < 0)
            throw new NotFoundException("Not found")

        this.jogadores.splice(player, 1)
    }
}
