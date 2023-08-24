export const {
	NODE_ENV = 'development',
	APP_PORT
} = process.env

export const IN_PROD = NODE_ENV === 'production'