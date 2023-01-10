import { PhotoSearchAPIResult } from "./interfaces/PhotoSearchAPIResult";
import { renderApp } from "./helpers/RenderApp";

async function fetchImagesFromAPI(searchTerm:string, perPage:number): Promise<PhotoSearchAPIResult> {
  const result = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=${perPage}`,
    {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      }
    });
  const json = (await result.json());
  return json;
}

fetchImagesFromAPI('dogs', 5).then((data) => {
  if(data) {
    renderApp(data);
  } else {
    renderApp(null);
  }
  // const htmlToRender = html``;
});
