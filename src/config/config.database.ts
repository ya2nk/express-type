import { DataSource } from "typeorm"
import config from "./config.app"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: config.MYSQL_USER,
    password: config.MYSQL_PASS,
    database: config.MYSQL_DB,
    synchronize: false,
    logging: true,
    entities: ["{src, dist}/models/*.model{.ts,.js}"],
    subscribers: [],
    migrations: [],
})
