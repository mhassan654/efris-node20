/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Address, Customer } from "@prisma/client";

export class AddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AddressCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressCountArgs>
  ): Promise<number> {
    return this.prisma.address.count(args);
  }

  async findMany<T extends Prisma.AddressFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindManyArgs>
  ): Promise<Address[]> {
    return this.prisma.address.findMany(args);
  }
  async findOne<T extends Prisma.AddressFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindUniqueArgs>
  ): Promise<Address | null> {
    return this.prisma.address.findUnique(args);
  }
  async create<T extends Prisma.AddressCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressCreateArgs>
  ): Promise<Address> {
    return this.prisma.address.create<T>(args);
  }
  async update<T extends Prisma.AddressUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressUpdateArgs>
  ): Promise<Address> {
    return this.prisma.address.update<T>(args);
  }
  async delete<T extends Prisma.AddressDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressDeleteArgs>
  ): Promise<Address> {
    return this.prisma.address.delete(args);
  }

  async findCustomers(
    parentId: string,
    args: Prisma.CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customers(args);
  }
}
