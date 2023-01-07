import { Photo } from "./Photo";

export interface PhotoSearchAPIResult {
    total_results: number;
    page: number;
    per_page: number;
    photos: Photo[];
    next_page: string;
}