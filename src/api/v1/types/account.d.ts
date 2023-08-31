/* eslint-disable @typescript-eslint/no-unused-vars */

export namespace Account {
	/**
	 * When updating a password while logged in
	 */
	type AuthedUpdatePassword = {
		oldPassword: string
		newPassword: string
	}

	/**
	 * When updating a password while not logged in
	 */
	type GuestUpdatePassword = {
		token: string
		email: string
		password: string
	}
}
