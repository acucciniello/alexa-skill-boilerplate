# alexa-skill-boilerplate [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard     ) [![Build Status](https://travis-ci.org/acucciniello/alexa-skill-boilerplate.svg?branch=master)](https://travis-ci.org/acucciniello/alexa-skill-boilerplate)
An easy to use Amazon Alexa Skill Boilerplate for fast skill creation

For In-Depth Explanation on how to use this check out my [blog post](http://www.acucciniello.com/How-to-Use-alexa-skill-boilerplate/)

## Requirements

[Node v8.0.0](https://nodejs.org/en/download/)


[Yarn v0.24.6](https://yarnpkg.com/lang/en/docs/install/)

## Getting Started

1. Clone the repository:

```
$ git clone https://github.com/acucciniello/alexa-skill-boilerplate.git
```

2. Install all packages:

```
$ yarn
```

3. Start Adding Intents to your skill by editing `app.js`.

## Testing

This uses `mocha` for a testing framework, `chai` for an assertion library, and  `bespoken-tools` to mock Alexa behavior

```
$ yarn test
```

## Deployment

This command will deploy it to lambda given you have sent up your environment for Claudia usage.

In order to have this properly set up:

1. Create a folder in your user’s home directory on your computer

```
$ mkdir ~/.aws && cd ~/.aws
```

2. Create a file called credentials

```
$ touch credentials
```

3. Edit that file to have your AWS Credentials

```
[claudia]
aws_access_key_id = ACCESS_KEY_ID_FROM_AWS_PAGE
aws_secret_access_key = SECRET_KEY_FROM_AWS_PAGE
```
4. Deploy to Lambda

```
$ yarn deploy
```

Once deployed, you can update your lambda function with:

```
$ yarn upload
```

## License

MIT
