import { PhotoSearchAPIResult } from "../interfaces/PhotoSearchAPIResult";

export async function fetchImagesFromAPI(searchTerm:string, perPage:number): Promise<PhotoSearchAPIResult> {
    const result = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=${perPage}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        }
      });
    const json = (await result.json());
    return json;
}