import { PhotoSearchAPIResult } from "./interfaces/PhotoSearchAPIResult";
import { render, html } from "lit-html";

async function fetchImagesFromAPI(searchTerm:string, perPage:number): Promise<PhotoSearchAPIResult> {
  const result = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=${perPage}`,
    {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      }
    });
  const json = (await result.json()) as PhotoSearchAPIResult;
  return json;
}

fetchImagesFromAPI('dogs', 5).then((data) => {
  const htmlToRender = html`
  <h1>Results for 'dogs'</h1>
  <ul>
    ${data.photos.map((photo)=>{
      return html`<li><img src=${ photo.src.small } /></li>`;
    })}
  </ul>`;
  const div = document.getElementById('app');
  if(!div) {
    throw new Error('Could not find div app');
  }
  render(htmlToRender, div);  
});
