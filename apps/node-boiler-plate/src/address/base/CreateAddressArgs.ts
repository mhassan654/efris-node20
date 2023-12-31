/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressCreateInput } from "./AddressCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAddressArgs {
  @ApiProperty({
    required: true,
    type: () => AddressCreateInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateInput)
  @Field(() => AddressCreateInput, { nullable: false })
  data!: AddressCreateInput;
}

export { CreateAddressArgs as CreateAddressArgs };
