import { RedisOptions } from 'ioredis'

const {
	REDIS_PORT = 6379,
	REDIS_HOST = 'localhost', // 'redis' if using docker
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	REDIS_PASSWORD = 'secret',
} = process.env

export const REDIS_OPTIONS: RedisOptions = {
	host: REDIS_HOST,
	port: +REDIS_PORT,
	// password: REDIS_PASSWORD
}
