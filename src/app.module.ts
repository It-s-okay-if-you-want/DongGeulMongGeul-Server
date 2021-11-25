import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import CatchException from './interceptor/error.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/ormConfig';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { GroupModule } from './group/group.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, TokenModule, PostModule, CommentModule, GroupModule],
  controllers: [GroupController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CatchException,
    },
    GroupService,
  ],
})
export class AppModule { }
