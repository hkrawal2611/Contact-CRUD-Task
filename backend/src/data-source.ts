import { DataSource } from "typeorm";
import { contactsEntity } from "./entities/contact.entity";
import * as fs from "fs";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql-ef32415-nisargganatra13.h.aivencloud.com",
    port: 16207,
    username: "avnadmin",
    password: "AVNS_zFxnn00ihuGqyFD0Hfy",
    database: "defaultdb",
    entities: [contactsEntity],
    synchronize: true,
    logging: true,
    extra: {
        ssl: {
            ca: fs.readFileSync("ca.pem").toString(),
        },
    },
});
