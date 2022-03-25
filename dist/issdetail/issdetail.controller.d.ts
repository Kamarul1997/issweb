import { ISSService } from "./issdetail.service";
export declare class ISSController {
    readonly issdetail: ISSService;
    constructor(issdetail: ISSService);
    addLocation(isTime: string, isDate: string, isLocation: string, isLatitude: string, isLongitude: string): any;
    getAllDetail(): Promise<import("./issdetail.model").Detail[]>;
}
