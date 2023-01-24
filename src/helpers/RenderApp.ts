import { PhotoSearchAPIResult } from "../interfaces/PhotoSearchAPIResult";
import { render, html, nothing } from "lit-html";
import { fetchImagesFromAPI } from "./fetchImagesFromAPI";

async function onFormSubmit(event: SubmitEvent) {
  event.preventDefault();
  if(!event.target) {
    return;
  }
  const formData = new FormData(event.target as HTMLFormElement);
  const query = formData.get('search-query');
  if(query) {  
    const results: PhotoSearchAPIResult = await fetchImagesFromAPI(query, 10);
    renderApp(results);
  }
}

export function renderApp(results: PhotoSearchAPIResult | null): void {
    const div = document.getElementById('app');
    if(!div) {
      throw new Error('Could not find div app');
    }
    const htmlToRender = html`
    <h1>TypeScript Photo App</h1>
    <form id="search" @submit=${onFormSubmit}>
      <input type="text" name="search-query" placeholder="dogs" />
      <input type="submit" value="Search">
    </form>
    <ul>
      ${results ? 
        results.photos.map((photo)=>{
        return html`<li><img src=${ photo.src.small } /></li>`})
        : nothing
      }
    </ul>`;
    render(htmlToRender, div);
}