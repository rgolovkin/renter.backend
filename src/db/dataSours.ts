import * as process from 'process';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const connectionOption: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(String(+process.env.DB_PORT || 5432)),
  username: 'renter',
  password: 'postgres',
  database: 'postgres',
  entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
};
console.log(connectionOption);

export default new DataSource({
  ...connectionOption,
});
