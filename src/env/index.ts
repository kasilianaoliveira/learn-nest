import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
	NODE_ENV: z.enum(['dev', 'test', 'production']),
	PORT: z.coerce.number().default(3333),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	POSTGRES_DB: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
	console.error('Invalid enviroment variables ❌', _env.error.format());

	//nenhum codigo é executado a partir disso aqui
	//derruba a aplicação
	throw new Error('Invalid enviroment variables.');
}
export const env = _env.data;
