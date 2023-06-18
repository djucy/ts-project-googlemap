import { Mappable } from "./CustomMap";
export declare class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    constructor();
    markerContent(): string;
}
//# sourceMappingURL=User.d.ts.map