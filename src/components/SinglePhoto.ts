import { Photo } from '../interfaces/Photo';
import { html } from 'lit-html';

export function renderSinglePhoto(photo: Photo) {
    return html`<li><img src=${ photo.src.small } /></li>`;
}