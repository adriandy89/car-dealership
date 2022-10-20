import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: any[] = [];
  findAll() {
    return this.cars;
  }
  findOneById(id: string) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found!`);
    return car;
  }
  create(createCarDto: CreateCarDto) {
    this.cars.push({ id: uuid(), ...createCarDto });
    return { id: uuid(), ...createCarDto };
  }
  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    if (carDB.id !== id) {
      throw new BadRequestException('Invalid car Id.');
    }
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }
  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
  fillCarsWithSeedData(cars: any[]) {
    this.cars = cars;
  }
}
