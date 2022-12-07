import{img} from './api.js'

class MainCard{
    render(movie){
        console.log(img+movie.poster_path);
        return (
            `
            <div class="slide_inner_card">
                <div class="slider_poster">
                    <img src="${img + movie.poster_path}" alt="">
                    <h4>${movie.title}</h4>
                </div>
            </div>
            `
        )
    }
}

export default new MainCard()







