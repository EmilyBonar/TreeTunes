//import querystring from "querystring";
var fetch = require("node-fetch");
var SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

function getApiUrl(id) {
	return `https://api.spotify.com/v1/playlists/${id}/tracks?market=US`;
}

exports.handler = async (event, context) => {
	let id = event.queryStringParameters.id;
	//id = "5xif4sULGuWiZDVCcjNXxR";
	//let result;

	var spotifyApi = new SpotifyWebApi({
		clientId: process.env.ClientID,
		clientSecret: process.env.ClientSecret,
	});
	let result = await spotifyApi
		.clientCredentialsGrant()
		.then(
			function (data) {
				// Save the access token so that it's used in future calls
				spotifyApi.setAccessToken(data.body["access_token"]);
			},
			function (err) {
				console.log(
					"Something went wrong when retrieving an access token",
					err.message,
				);
			},
		)
		.then(() => {
			return getPlaylist(spotifyApi, id);
		});
	return {
		statusCode: 200,
		body: JSON.stringify(result),
	};
};

function getPlaylist(spotifyApi, id) {
	const headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
	};
	return fetch(getApiUrl(id), { headers: headers })
		.then((response) => response.json())
		.then((jsonData) => {
			result = jsonData;
			return result;
		});
}
