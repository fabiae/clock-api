import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async getQuoteRandom() {
    try {
      const { apiQuotes } = this.configService.get("app")
      const promise = this.httpService.get(apiQuotes)
      const response = await lastValueFrom(promise);

      if (response.status !== 200)
        return { error: "Error in get quote" }

      let number = Math.floor(Math.random() * response.data.length)
      return { success: "OK", payload: response.data[number] }
      
    } catch (error) {
      return { error }
    }
  }
}
