export class AppError extends Error {
	constructor(
		public errorCode: number | string,
		message: string,
		public statusCode: number,
	) {
		super(message)
		this.errorCode = +errorCode
		this.statusCode = statusCode
	}
}
