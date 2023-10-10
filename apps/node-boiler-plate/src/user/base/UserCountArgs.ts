/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereInput } from "./UserWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UserCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}

export { UserCountArgs as UserCountArgs };
