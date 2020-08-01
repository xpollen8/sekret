# sekret

##server secrets management

Store and retrieve secrets and application credentials securely, using a known environmment variable which holds the symmetric key.

# Usage

First, set the secret key for your application into environment.

```
export YOUR_APPS_SECRETS="super secret key string"
```

## to encrypt secrets

```
const encryptedSecretsFile = './secrets.encrypted'; // change to suite
const Secrets = require('sekret');
const encrypted = new Secrets(process.env.YOUR_APPS_SECRETS).encrypt(encryptedSecretsFile);
console.log("Secrets are", decrypted);
```

Then, configure you

## to decrypt secrets

```
const encryptedSecretsFile = './secrets.encrypted'; // change to suite
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

const Secrets = require('sekret');
const decrypted = new Secrets(process.env.YOUR_APPS_SECRETS).decrypt(secretsToEncrypt, encryptedSecretsFile);

console.log("Secrets are", decrypted);
```
