// import { RedisOptions } from 'redis'


const {
  REDIS_PORT = 6379,
  REDIS_HOST = 'localhost',
  REDIS_PASSWORD = 'secret'
} = process.env

export const REDIS_OPTIONS: any = {
  host: REDIS_HOST,
  port: +REDIS_PORT,
  // password: REDIS_PASSWORD
}