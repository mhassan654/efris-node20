/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereInput } from "./OrderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrderOrderByInput } from "./OrderOrderByInput";

@ArgsType()
class OrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  where?: OrderWhereInput;

  @ApiProperty({
    required: false,
    type: [OrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrderOrderByInput], { nullable: true })
  @Type(() => OrderOrderByInput)
  orderBy?: Array<OrderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OrderFindManyArgs as OrderFindManyArgs };
