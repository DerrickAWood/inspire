
import store from "../store.js"


// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor(){
    this.getImg()
  }

  async getImg(){
    imgApi.get()
    .then(res => {
      console.log(res.data);
      let img = res.data.large_url || res.data.url
      store.commit('img', img)
    })

    // let res = await imgApi.get();
    // store.commit("image", new Image(res.data.large_url));
    // console.log(res.data);
  }
    

}

const imageService = new ImageService();
export default imageService;
