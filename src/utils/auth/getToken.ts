import pc from "picocolors"

const uuid="af88bcff-1157-40a0-b579-030728aacf0b"
const urlApi="https://login.laliga.es/laligadspprob2c.onmicrosoft.com/oauth2/v2.0/token?p=B2C_1A_ResourceOwnerv2"

export async function getToken(email: string, password: string) {
    const data = {
        grant_type: "password",
        client_id: `${uuid}`,
        scope: `openid ${uuid} offline_access`,
        redirect_uri: "authredirect://com.lfp.laligafantasy",
        username: email,
        password: password,
        response_type: "id_token",
    }

    try{
        const response=await fetch(urlApi, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(data),
        })
        const jsonResponse= response.ok ? await response.json() : null
        console.log(pc.green("Token obtenido correctamente"))
        return jsonResponse["access_token"].toString()
        
    }catch (error){
        console.error(pc.red("Error al obtener el token"))
        return null
    }
            
    
}