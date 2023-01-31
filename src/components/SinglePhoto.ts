import { Photo } from '../interfaces/Photo';
import { html } from 'lit-html';

export function SinglePhoto(photo: Photo) {
    return html`<li class="photo">
    <img src=${ photo.src.small } />
    <button class="like">Like</button>
    </li>`;
}