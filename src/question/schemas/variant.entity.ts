import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Name, NameSchema } from '../../shared/types/name.entity';

export type VariantDocument = HydratedDocument<Variant>;

@ObjectType()
@Schema({ timestamps: true })
export class Variant {
  @Field(() => ID)
  _id?: mongoose.Schema.Types.ObjectId;

  @Field(() => Name)
  @Prop({ type: NameSchema })
  name: Name;

  @Prop({ type: Boolean, required: true })
  correct: boolean;
}

export const VariantSchema = SchemaFactory.createForClass(Variant);
