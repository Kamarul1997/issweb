import {Controller, Post, Body, Get, Render,Param, Patch, Delete} from '@nestjs/common';
import {ISSService} from "./issdetail.service";




@Controller('details')
export class ISSController{
    constructor(public readonly issdetail:ISSService) {}
    

    @Post()
    addLocation(
        @Body('time') isTime: number,
        @Body('date') isDate: string,
        @Body('location') isLocation: string,
        @Body('latitude') isLatitude: string,
        @Body('longitude') isLongitude: string,


    ): any {
        const generatedId = this.issdetail.insertDetail(
            isTime,
            isDate,
            isLocation,
            isLatitude,
            isLongitude);
       return{id:generatedId};




    }

    @Get()
    async getAllDetail() {
        return this.issdetail.getDetail();

    }
    


}


















