/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderCreateNestedManyWithoutProductsInput {
  @Field(() => [OrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderWhereUniqueInput],
  })
  connect?: Array<OrderWhereUniqueInput>;
}

export { OrderCreateNestedManyWithoutProductsInput as OrderCreateNestedManyWithoutProductsInput };
