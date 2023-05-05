import dotenv from 'dotenv'

dotenv.config()

const config = {
    mysqlUser : process.env.MYSQL_USER,
    mysqlPass : process.env.MYSQL_PASS,
    mysqlDB : process.env.MYSQL_DB
}

export default config