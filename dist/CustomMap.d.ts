export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}
export declare class CustomMap {
    private googleMap;
    constructor(divId: string);
    addMarker(mappable: Mappable): void;
}
//# sourceMappingURL=CustomMap.d.ts.map