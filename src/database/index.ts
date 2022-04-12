import { IUser } from '../interfaces'

interface IDatabase {
  users: IUser[]
}

const database: IDatabase = { users: [] };

export default database;