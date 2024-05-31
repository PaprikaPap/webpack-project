import $ from "jquery";
import { getButton } from "./button/button";
import image from "./assets/react-logo.png";

import './index.css';

getButton();

const picture = document.createElement('img');

picture.setAttribute('src', image);
document.querySelector('body').appendChild(picture);