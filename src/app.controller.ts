import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { ResponseError } from './@common/interfaces/error.interface';
import { ResponseSuccess } from './@common/interfaces/succes.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/quote-random")
  async getQuoteRandom(): Promise<ResponseSuccess | ResponseError> {
    const response = await this.appService.getQuoteRandom()

    if (response.error)
      throw new InternalServerErrorException(response.error)

    return response
  }

}
