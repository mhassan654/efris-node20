/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserCreateInput } from "./UserCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateUserArgs {
  @ApiProperty({
    required: true,
    type: () => UserCreateInput,
  })
  @ValidateNested()
  @Type(() => UserCreateInput)
  @Field(() => UserCreateInput, { nullable: false })
  data!: UserCreateInput;
}

export { CreateUserArgs as CreateUserArgs };
