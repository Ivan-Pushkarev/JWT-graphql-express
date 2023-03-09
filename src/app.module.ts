import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as process from 'process';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
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
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
})
export class AppModule {}
