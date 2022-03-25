import { Injectable } from "@nestjs/common";
import { Detail } from "./issdetail.model";

@Injectable()
export class ISSService{

    public details: Detail[] = [];

    insertDetail(time: number, date:string, location: string, latitude: string, longitude: string) {
        const isId= Math.random().toString();
        //const Answer= time;
        const newDetail = new Detail(isId, time, date, location, latitude, longitude);
        this.details.push(newDetail);

    
        //let x;
        //if (Answer < 10) {
          //x = "ISS in South Korea";
        //} else if (time < 20) {
          //x = "ISS in Philipines";
        //}   else {
          //x = "ISS is in Atlantic sea";
        //}
        //return x;


        return isId;

    }

    getDetail() {

        return [...this.details];
        
    }





}








