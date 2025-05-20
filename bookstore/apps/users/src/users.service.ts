import { Injectable } from '@nestjs/common';
import {UserDto} from './dto/user.dto';
import { last } from 'rxjs';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 25,
    },
    {
      id: 3,
      firstName: 'Jim',
      lastName: 'Beam',
      age: 35,
    },
    {
      id: 4,
      firstName: 'Jack',
      lastName: 'Daniels',
      age: 40,
    },
    {
      id: 5,
      firstName: 'Johnny',
      lastName: 'Walker',
      age: 45,
    },
  ];

  // create(user: UserDto): UserDto {
  //   this.users.push(user);
  //   return user;
  // }

  findAll(): UserDto[] {
    return this.users;
  }

  // findOne(id: number): UserDto {
  //   return this.users.find(user => user.id === id);
  // }

  // update(id: number, user: UserDto): UserDto {
  //   const index = this.users.findIndex(u => u.id === id);
  //   if (index !== -1) {
  //     this.users[index] = user;
  //     return user;
  //   }
  //   return null;
  // }

  // delete(id: number): void {
  //   this.users = this.users.filter(user => user.id !== id);
  // }
}
