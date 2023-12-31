/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereInput } from "./AddressWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AddressCountArgs {
  @ApiProperty({
    required: false,
    type: () => AddressWhereInput,
  })
  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: AddressWhereInput;
}

export { AddressCountArgs as AddressCountArgs };
