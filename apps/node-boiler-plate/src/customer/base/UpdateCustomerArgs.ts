/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerUpdateInput } from "./CustomerUpdateInput";

@ArgsType()
class UpdateCustomerArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput, { nullable: false })
  where!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerUpdateInput)
  @Field(() => CustomerUpdateInput, { nullable: false })
  data!: CustomerUpdateInput;
}

export { UpdateCustomerArgs as UpdateCustomerArgs };
