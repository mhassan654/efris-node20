/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderCreateInput } from "./OrderCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOrderArgs {
  @ApiProperty({
    required: true,
    type: () => OrderCreateInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateInput)
  @Field(() => OrderCreateInput, { nullable: false })
  data!: OrderCreateInput;
}

export { CreateOrderArgs as CreateOrderArgs };
