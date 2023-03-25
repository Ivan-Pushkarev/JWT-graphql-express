import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Name {
  @Prop({ type: String })
  ru: string;

  @Prop({ type: String })
  en: string;

  @Prop({ type: String })
  es: string;
}
export const NameSchema = SchemaFactory.createForClass(Name);
