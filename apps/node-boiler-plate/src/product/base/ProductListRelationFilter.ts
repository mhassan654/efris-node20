/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductWhereInput } from "./ProductWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereInput)
  @IsOptional()
  @Field(() => ProductWhereInput, {
    nullable: true,
  })
  every?: ProductWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereInput)
  @IsOptional()
  @Field(() => ProductWhereInput, {
    nullable: true,
  })
  some?: ProductWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereInput)
  @IsOptional()
  @Field(() => ProductWhereInput, {
    nullable: true,
  })
  none?: ProductWhereInput;
}
export { ProductListRelationFilter as ProductListRelationFilter };
