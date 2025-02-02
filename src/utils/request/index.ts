const apiBaseURL= `https://api-fantasy.llt-services.com/api`

function headersPost(token: string){
    const headers= {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }
    return headers
}
export async function leaguesRequest(cookie: string){
    const url= `${apiBaseURL}/v4/leagues?x-lang=es`
    const response= await fetch(url, headersPost(cookie))
    return response.json()
}

export async function rankingRequest(cookie : string, leagueId: string){
    const url = `${apiBaseURL}/v5/leagues/${leagueId}/ranking?x-lang=es`;
    const response = await fetch(url, headersPost(cookie));
    return response.json(); 
}

export async function marketRequest(cookie : string, leagueId: string){
    const url = `${apiBaseURL}/v3/league/${leagueId}/market?x-lang=es`;
    const response = await fetch(url, headersPost(cookie));
   return response.json(); 
}
export async function activityRequest(cookie: string, leagueId: string, idPage: number){
    const url = `${apiBaseURL}/v3/leagues/${leagueId}/news/${idPage}?x-lang=es`;
    const response = await fetch(url, headersPost(cookie));
   return response.json(); 
}