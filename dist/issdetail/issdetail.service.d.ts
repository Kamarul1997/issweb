import { Detail } from "./issdetail.model";
export declare class ISSService {
    details: Detail[];
    insertDetail(time: string, date: string, location: string, latitude: string, longitude: string): string;
    getDetail(): Detail[];
}
