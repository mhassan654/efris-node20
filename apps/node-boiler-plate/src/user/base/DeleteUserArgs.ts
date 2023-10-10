/*
------------------------------------------------------------------------------ 

 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more


------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteUserArgs {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}

export { DeleteUserArgs as DeleteUserArgs };
