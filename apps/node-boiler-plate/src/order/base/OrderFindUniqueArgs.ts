/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class OrderFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @Field(() => OrderWhereUniqueInput, { nullable: false })
  where!: OrderWhereUniqueInput;
}

export { OrderFindUniqueArgs as OrderFindUniqueArgs };
