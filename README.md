# sekret

## server secrets management

Store and retrieve secrets and application credentials securely, using a known environmment variable which holds the symmetric key.

# Install

```
npm i --save https://github.com/xpollen8/sekret
```

# Usage

First, set the secret key for your application into environment.

```
export YOUR_APPS_SECRETS="super secret key string"
```

## to encrypt secrets

```
const Secrets = require('sekret');
const encryptedSecretsFile = './secrets.encrypted'; // defaults to this
const secretsToEncrypt = {
	database: {
		hostname: '',
		username: '',
		password: '',
	},
	otherConfig: {
		thing1: '',
		thing2: '',
	},
};

const encrypted = new Secrets(process.env.YOUR_APPS_SECRETS[, encryptedSecretsFile]).encrypt(secretsToEncrypt);
console.log("Secrets are", encrypted);
```

## to decrypt secrets

```
const Secrets = require('sekret');
const encryptedSecretsFile = './secrets.encrypted'; // defaults to this

const decrypted = new Secrets(process.env.YOUR_APPS_SECRETS[, encryptedSecretsFile]).decrypt();
console.log("Secrets are", decrypted);
```
