import { Module } from '@nestjs/common';
import { DailyReportController } from './daily-report.controller';
import { DailyReportService } from './daily-report.service';

@Module({
  controllers: [DailyReportController],
  providers: [DailyReportService],
})
export class DailyReportModule {}
