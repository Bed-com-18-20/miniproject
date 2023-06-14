import {  Entity } from "typeorm";

@Entity()
export class Role{
    static ADMIN(ADMIN: any) {
      throw new Error('Method not implemented.');
    }
    
}