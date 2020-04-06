import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawImage(){
  let img = store.State.img
  document.getElementById('bg-img').style.backgroundImage = "url("+ img.toString() + ")"
}


export default class ImageController {
  constructor() {
    store.subscribe("img", drawImage);
    ImageService.getImg();
  }
}