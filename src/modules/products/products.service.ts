import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../db/models/product.entity';
import { Repository } from 'typeorm';
import { User } from '../../db/models/user.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) public readonly productsRepo: Repository<Product>,
    @InjectRepository(User) public readonly usersRepo: Repository<User>,
  ) {}
}