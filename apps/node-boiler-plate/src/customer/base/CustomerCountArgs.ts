/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CustomerCountArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereInput,
  })
  @Field(() => CustomerWhereInput, { nullable: true })
  @Type(() => CustomerWhereInput)
  where?: CustomerWhereInput;
}

export { CustomerCountArgs as CustomerCountArgs };
