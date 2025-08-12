const UUID = "af88bcff-1157-40a0-b579-030728aacf0b";
const URLAPI =
  "https://login.laliga.es/laligadspprob2c.onmicrosoft.com/oauth2/v2.0/token?p=B2C_1A_ResourceOwnerv2";

export async function getToken(
  email: string,
  password: string
): Promise<string | null> {
  const data = {
    grant_type: "password",
    client_id: UUID,
    scope: `openid ${UUID} offline_access`,
    redirect_uri: "authredirect://com.lfp.laligafantasy",
    username: email,
    password: password,
    response_type: "id_token",
  };

  try {
    const response = await fetch(URLAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    return result.access_token;
  } catch (error) {
    return null;
  }
}
