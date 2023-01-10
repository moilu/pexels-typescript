import { PhotoSearchAPIResult } from "../interfaces/PhotoSearchAPIResult";
import { render, html, nothing } from "lit-html";

export function renderApp(results: PhotoSearchAPIResult | null): void {
    const div = document.getElementById('app');
    if(!div) {
        throw new Error('Could not find div app');
    }
    // <form id="search" @submit=${onFormSubmit}>
    //     <input type="text" name="search-query" placeholder="dogs" />
    //     <input type="submit" value="Search">
    // </form>
    const htmlToRender = html`
    <h1>TypeScript Photo App</h1>
    <ul>
      ${results ? 
        results.photos.map((photo)=>{
        return html`<li><img src=${ photo.src.small } /></li>`})
        : nothing
      }
    </ul>
    `;
    render(htmlToRender, div);
}