import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { QuestionGroupModule } from './question-group/question-group.module';
import { AnswerModule } from './answer/answer.module';
import { AnswerGroupModule } from './answer-group/answer-group.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        credentials: true,
        origin: ['https://studio.apollographql.com', process.env.CLIENT_URL],
      },
      context: ({ req, res }) => ({ req, res }),
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
    UserModule,
    QuestionModule,
    QuestionGroupModule,
    AnswerModule,
    AnswerGroupModule,
  ],
})
export class AppModule {}
