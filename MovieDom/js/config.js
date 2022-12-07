import {main_api} from "./api.js"
console.log(main_api);

export async function getPopularMovies(){
    return await fetch(main_api + '&query=fantastic')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);
        return data.results;
    })
}

export async function getComedyMovies(){
    return await fetch(main_api + '&query=action')
    .then(resp => resp.json())
    .then(data => {
        return data.results;
    })
}

export async function getActionMovies(){
    return await fetch(main_api + '&query=war')
    .then(resp => resp.json())
    .then(data => {
        return data.results;
    })
}