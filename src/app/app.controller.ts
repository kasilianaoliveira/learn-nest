import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

//voce pode adicionar um padrão de inicio pra ficar algo como:
//localhost:3000/api/teste
@Controller('/app')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get('/teste')
	getTeste(): string {
		return 'Rota de teste da API';
	}

	@Post('/teste')
	createTest() {
		return 'Rota POST funcionando';
	}
}
