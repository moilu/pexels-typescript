import { fetchImagesFromAPI } from "./helpers/fetchImagesFromAPI";
import { renderApp } from "./helpers/renderApp";

fetchImagesFromAPI('dogs', 5).then((data) => {
  if(data) {
    renderApp(data);
  } else {
    renderApp(null);
  }
});
