/* eslint-disable @typescript-eslint/no-unused-vars */

export namespace Account {
	type TUpdatePassword = {
		oldPassword: string
		newPassword: string
	}

	type TUpdatePasswordWithToken = {
		token: string
		password: string
	}
}
