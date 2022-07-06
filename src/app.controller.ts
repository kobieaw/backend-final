import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('')
  // @ApiOperation({
  //   summary: 'Database contents',
  //   description: 'Gets the Database contents of this server',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Database contents',
  // })
  // async getAllData() {
  //   try {
  //     const result = this.appService.getAll();
  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  @Get('ipfs')
  @ApiOperation({
    summary: 'IPFS node connection',
    description: 'Returns true if the IPFS Node configured is running',
  })
  @ApiResponse({
    status: 200,
    description: 'IPFS Node connection',
    type: Boolean,
  })
  async ipfsOnline() {
    try {
      return this.appService.isIpfsNodeOnline();
    } catch (error) {
      return error;
    }
  }
}
