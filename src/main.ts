import { renderApp, fetchImagesFromAPI } from "./helpers";

fetchImagesFromAPI('dogs', 5).then((data) => {
  if(data) {
    renderApp(data);
  } else {
    renderApp(null);
  }
  // const htmlToRender = html``;
});
