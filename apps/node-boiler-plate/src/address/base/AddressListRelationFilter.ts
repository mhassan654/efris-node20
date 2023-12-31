/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereInput } from "./AddressWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AddressListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AddressWhereInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereInput)
  @IsOptional()
  @Field(() => AddressWhereInput, {
    nullable: true,
  })
  every?: AddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => AddressWhereInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereInput)
  @IsOptional()
  @Field(() => AddressWhereInput, {
    nullable: true,
  })
  some?: AddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => AddressWhereInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereInput)
  @IsOptional()
  @Field(() => AddressWhereInput, {
    nullable: true,
  })
  none?: AddressWhereInput;
}
export { AddressListRelationFilter as AddressListRelationFilter };
