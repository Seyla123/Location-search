import axios from "axios";
import type { SearchResponse } from "../types/SearchResponse";
import type { Place } from "../types/Place";
export const search = async (search: string) => {
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${search}&format=geojson&addressdetails=1&limit=5`)
    const data: SearchResponse = await res.data;
    const places: Place[] = data.features.map(feature => {
        return {
            id: feature.properties.place_id,
            name: feature.properties.display_name,
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1]
        }
    });
    return places;
}