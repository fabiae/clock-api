import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
  port: +(process.env.PORT),
  host: process.env.NODE_ENV === 'local' ?
    `${process.env.HOST_SERVER}:${+process.env.PORT}` : process.env.HOST_SERVER,
  apiQuotes: process.env.API_QUOTES
}))