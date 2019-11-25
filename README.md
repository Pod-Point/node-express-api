# node-express-api

A template repository for a Node.js API using Express.js and TypeScript.

## Usage

See the following link for how to create a repository from a template:
https://help.github.com/en/articles/creating-a-repository-from-a-template

### Installation

To install the latest version of this templates dependencies, run the following command:
```bash
npm install --save @pod-point/typescript express http-status-codes mysql typeorm
```

To install the latest version of this templates  dev dependencies, run the following command:
```bash
npm install --save-dev @types/express @types/faker @types/jest @types/node @types/supertest concurrently faker jest nodemon sqlite3 supertest ts-jest ts-node tslint tslint-eslint-rules typescript
```

## Development

### Setup

To install this applications dependencies, run the following command:

```bash
npm install
```

This application uses environment variables to define it's database connection. We have setup a `postinstall` script to create an `.env` file from the `.env.example` file, you can then modify the values accordingly for your development environment, this script runs automatically upon running `npm install` but can also be ran by the following command:

```bash
npm run postinstall
```

To build the docker image run the following command:
```bash
docker-compose build
```

To prepare your environment run the following command:

```bash
docker-compose up -d
```

### Database

This application uses [TypeORM](https://github.com/typeorm/typeorm). To run any TypeORM command uses:

```bash
npm run typeorm <command>
```

### Build

This application uses Typescript. To create a JavaScript build, run the following command:

```bash
npm run build
```

### Linting

This application uses TSLint. To run the linting for this project, run the following command:

```bash
npm run lint
```

### Testing

This application uses Jest. To run the test suites for this project, run the following command:

```bash
npm run test
```

### OpenAPI

This application uses open API. You can [its specifications here](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) and a [live editor here with an example](http://editor.swagger.io/).

### Releases

TBC.
