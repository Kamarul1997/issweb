import { Module } from "@nestjs/common";
import { ISSController } from "./issdetail.controller";
import { ISSHomeController } from "./issdetail.controllerhome";
import { ISSService } from "./issdetail.service";


    @Module({
        controllers:[ISSController,ISSHomeController],
        providers:[ISSService],


    })
    export class ISSModule{}