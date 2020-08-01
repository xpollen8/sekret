const Cryptr = require('cryptr');
const fs = require('fs');

module.exports = class Secrets {

	constructor (key, path = './secrets.encrypted') {
		this.path = path;
		this.cryptr = new Cryptr(key);
	}

	encrypt (json, path) {
		const encrypted = this.cryptr.encrypt(JSON.stringify(json));
		if (path) {
			console.log(`Saving to ${path}`);
			fs.writeFileSync(path, encrypted);
		}
		return encrypted;
	}

	readSecretsFile (path = this.path) {
		return fs.readFileSync(path, {encoding:'utf8', flag:'r'}).trim();
	}

	decrypt () {
		const encrypted = this.readSecretsFile();
		const secrets = JSON.parse(this.cryptr.decrypt(encrypted));
		return secrets;
	}
}
