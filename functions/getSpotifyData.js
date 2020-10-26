var fetch = require("node-fetch");
var SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

function getApiUrl(id) {
	return `https://api.spotify.com/v1/playlists/${id}/tracks?market=US`;
}
exports.getData = (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	let id = req.params[0];

	var spotifyApi = new SpotifyWebApi({
		clientId: process.env.ClientID,
		clientSecret: process.env.ClientSecret,
	});
	spotifyApi
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
			const headers = {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
			};

			fetch(getApiUrl(id), { headers: headers })
				.then((response) => response.json())
				.then((jsonData) => res.status(200).send(jsonData));
		});
};
