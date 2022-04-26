const API_KEY = '0f294f1a2f41080ae252ca8b1ab63bd7'
const API_URL = 'https://api.themoviedb.org/3/'
const API_LANG = 'pt-BR'

export function GET_GENRES(genre) {
    return {
        url: `${API_URL}genre/${genre}/list?api_key=${API_KEY}&language=${API_LANG}`
    }
}

export function GET_TRENDS(type) {
    return {
        url: `${API_URL}trending/${type}/day?api_key=${API_KEY}&language=${API_LANG}`
    }
}

export function GET_PEOPLE(page) {
    return {
        url: `${API_URL}person/popular?api_key=${API_KEY}&language=${API_LANG}&page=${page}`
    }
}

export function GET_MOVIE(page, genre) {
    return {
        url: `${API_URL}discover/movie?api_key=${API_KEY}&language=${API_LANG}&sort_by=popularity.desc&page=${page}&with_genres=${genre}`
    }
}

export function GET_TV(page, genre) {
    return {
        url: `${API_URL}discover/tv?api_key=${API_KEY}&language=${API_LANG}&sort_by=popularity.desc&page=${page}&with_genres=${genre}`
    }
}

export function GET_PROG_BY_ID(id, type) {
    return {
        url: `${API_URL}${type}/${id}?api_key=${API_KEY}&language=${API_LANG}`
    }
}

export function GET_CREDITS(id, type) {
    return {
        url: `${API_URL}${type}/${id}/credits?api_key=${API_KEY}&language=${API_LANG}`
    }
}

export function GET_VIDEO(id, type) {
    return {
        url: `${API_URL}${type}/${id}/videos?api_key=${API_KEY}&language=${API_LANG}`
    }
}

export function GET_PEOPLE_CREDITS(id) {
    return {
        url: `${API_URL}person/${id}/combined_credits?api_key=${API_KEY}&language=${API_LANG}`
    }
}

export function GET_SEARCH_RESULTS(query) {
    return {
        url: `${API_URL}search/multi?api_key=${API_KEY}&query=${query}&language=${API_LANG}&include_adult=false`
    }
}
