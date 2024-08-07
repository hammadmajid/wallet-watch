export interface UserProfileData {
	name: string
	email: string
	currency: string
}

export interface AccountData {
	id: string
	name: string
	type: string
	balance: number
}

export interface AccountList {
	accounts: AccountData[]
}
