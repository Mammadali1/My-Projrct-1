import { getActionMovies, getComedyMovies, getPopularMovies } from "./config.js";
import mainCard from './mainCard.js'
import Slider from "./slider.js"
import VideoCard from './videoCard.js'
import {container,comedyContainer,actionContainer,popularLeftBtn,popularRightBtn,bestLeftBtn,bestRightBtn,actionLeftBtn,actionRightBtn,videosContainer} from './query.js'

getPopularMovies()
    .then(resp => {
        resp.forEach(movie => {
            container.innerHTML += mainCard.render(movie)
        })
        
        Slider.buttons(popularLeftBtn, popularRightBtn, container.children)
    })

getComedyMovies()
.then(resp => {
    resp.forEach(movie => {
        comedyContainer.innerHTML += mainCard.render(movie)
    })
    Slider.buttons(bestLeftBtn, bestRightBtn, comedyContainer.children)

})
getActionMovies()
.then(resp => {
    resp.forEach(movie => {
        actionContainer.innerHTML += mainCard.render(movie)
    })
    Slider.buttons(actionLeftBtn,actionRightBtn,actionContainer.children)
})

fetch('../db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(video => {
            videosContainer.innerHTML += VideoCard.render(video)

        })
    })