import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from './env';
import { ValidationPipe } from '@nestjs/common';
/**
 * src/app.modules.ts: modulo principal do aplicativo
 * src/app.controller.ts: Define as rotas e lida com as requisicões
 * src/app.service.ts: Contém a lógica de negócio, separado do controlador
 */

//arquivo que inicia o projeto
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	if (env.NODE_ENV === 'dev') {
		const config = new DocumentBuilder()
			.setTitle('Task Example')
			.setDescription(
				`
			API para gerenciamento de atividades, com suporte a upload de fotos, filas assíncronas via RabbitMQ, e arquitetura baseada em Docker.
			Ideal para aplicações que exigem escalabilidade, testes automatizados e integração entre usuários e tarefas.
			`,
			)
			.setVersion('1.0.0')
			.addTag('Users', 'Cadastro, login e gerenciamento de usuários')
			.addTag('Tasks', 'Criação, edição e controle de atividades')
			.build();

		const documentFactory = () => SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('api', app, documentFactory);
	}
	await app.listen(env.PORT ?? 3000);
}
bootstrap();
