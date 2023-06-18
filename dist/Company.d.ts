import { Mappable } from './CustomMap';
export declare class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    constructor();
    markerContent(): string;
}
//# sourceMappingURL=Company.d.ts.map