const clientId = "ClientId";
const clientSecret = "clientSecretHere";
const redditApiUrl = "https://www.reddit.com";

//accessTokenAuthorizatio function to get access

async function getTokenAuthorization() {
  const response = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "Application/x-www-form-urlencoded",
      Authorization: "Basic" + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credential",
  });

  const data = await response.json();
  return data.access_token;
}

//function to get the subreddit data(subredditName)

async function getSubredditData(subredditName) {
  const accesToken = await getTokenAuthorization();

  const response = await fetch(`${redditApiUrl}/r/${subredditName}`, {
    header: {
      Authorization: `Bearer ${accesToken}`,
    },
  });

  const data = await response.json();
  console.log("Subreddit Data: ", data);
}
