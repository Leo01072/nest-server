import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { DailyReportModule } from './daily-report/daily-report.module';

@Module({
  imports: [PostsModule, UserModule, DailyReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
