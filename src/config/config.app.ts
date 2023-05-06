import dotenv from 'dotenv'

dotenv.config()

const config = {
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASS: process.env.MYSQL_PASS,
    MYSQL_DB: process.env.MYSQL_DB,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
}

export default config