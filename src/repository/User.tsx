export class User {
	constructor(
		private _name: string,
		private _email: string,
		private _password: string,
		private _phone: string,
		private _website: string,
		private _imgPath: string
	) {}

	public get name(): string {
		return this._name;
	}
	public get imgPath(): string {
		return this._imgPath;
	}
	public get email(): string {
		return this._email;
	}
	public get phone(): string {
		return this._phone;
	}
	public get website(): string {
		return this._website;
	}
}
