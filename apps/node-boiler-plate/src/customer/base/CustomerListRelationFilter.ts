/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereInput)
  @IsOptional()
  @Field(() => CustomerWhereInput, {
    nullable: true,
  })
  every?: CustomerWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereInput)
  @IsOptional()
  @Field(() => CustomerWhereInput, {
    nullable: true,
  })
  some?: CustomerWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereInput)
  @IsOptional()
  @Field(() => CustomerWhereInput, {
    nullable: true,
  })
  none?: CustomerWhereInput;
}
export { CustomerListRelationFilter as CustomerListRelationFilter };
