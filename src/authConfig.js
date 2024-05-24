export const msalConfig = {
  auth: {
    clientId: "ef97f49a-fc61-411b-9652-a8c6c5f8a53e",
    authority:
      "https://login.microsoftonline.com/8f102725-4bbc-4a0f-ba03-1a0e913cd18e",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", //we may use localStorage or sessionStorage for cache but sessionStorage is more secure
    storeAuthStateCookie: false, // default set to false
  },
};
export const loginReq = {
  scopes: ["User.Read"],
};
