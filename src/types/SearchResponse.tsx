export interface SearchResponse {
    features: Array<{
        geometry: {
            coordinates: number[];
        };
        properties: {
            display_name: string;
            place_id: number;
        };
    }>;
}