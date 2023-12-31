/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCreateInput } from "./ProductCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateProductArgs {
  @ApiProperty({
    required: true,
    type: () => ProductCreateInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateInput)
  @Field(() => ProductCreateInput, { nullable: false })
  data!: ProductCreateInput;
}

export { CreateProductArgs as CreateProductArgs };
