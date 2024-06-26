# Assesment

Datatable for cryptocurrency

## API Reference

#### Get all Cryptocurrency Data

```
Method GET
Api endPoint -/api/cryptocurrencyData
```

#### .env Variables

| Key                                 | Value    | Description                             |
| :---------------------------------- | :------- | :-------------------------------------- |
| `DATABASE_URL`                      | `string` | **Required**. Postgres Database Url     |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | `string` | **Required**. Cloudinary Api Name       |
| `NEXT_PUBLIC_CLOUDINARY_API_KEY`    | `string` | **Required**. Cloudinary Api Key        |
| `CLOUDINARY_API_SECRET`             | `string` | **Required**. Cloudinary Api Secret Key |

#### Get Cloudinary Api credential [link](https://console.cloudinary.com/pm/c-7af62625e75b87bea892c5fb5643e8/getting-started)

## Installation

## Environment version

```
nextjs@14.2.4
node@^18
reactjs@^18
```

Make sure you're running node 18.18.2 or above

```
$ git clone <repo-url>
$ cd assesment
$ npm install
```

## Run server locally

```
$ npm run dev
```

## Linters, Prettier

```
$ npm run prettier:check
$ npm run prettier:fix
$ npm run lint:check
$ npm run lint:fix
```
