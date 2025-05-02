import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

/**
 * src/app.modules.ts: modulo principal do aplicativo
 * src/app.controller.ts: Define as rotas e lida com as requisicões
 * src/app.service.ts: Contém a lógica de negócio, separado do controlador
 */

//arquivo que inicia o projeto
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
