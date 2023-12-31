/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateCustomerArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerCreateInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateInput)
  @Field(() => CustomerCreateInput, { nullable: false })
  data!: CustomerCreateInput;
}

export { CreateCustomerArgs as CreateCustomerArgs };
