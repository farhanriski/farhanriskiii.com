// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization const token =
'BQCI8jk2SgXHcEQl1FtU-vooycHhf3laOEKFAtnwJYoi1tsRrh5Z9nMPDFaQwbu6oNbehJ2HwNi2JtYTLG5UroO5aq2s_-94USDGZy59V1Tortxyv2Y4R_GYbofDc1UXofqXHxB0wPv0-kfKFttxTgNZll0MJ-ILtpoTxtPay3i0f5WaxZqGkkzuVCQM6NYQlfLRAxJ7xTVqzH0zns_5RcgLLciBak_Pxq-ypecaPvdu2U9E9vKxRNiQmN4AIST8Hn4I6kU3';
async function fetchWebApi(endpoint, method, body) { const res = await fetch(`https://api.spotify.com/${endpoint}`, { headers: { Authorization: `Bearer ${token}`, }, method, body:JSON.stringify(body) }); return await res.json(); } async
function getTopTracks(){ // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks return (await fetchWebApi( 'v1/me/top/tracks?time_range=short_term&limit=5', 'GET' )).items; }
const topTracks = await getTopTracks(); console.log( topTracks?.map( ({name, artists}) => `${name} by ${artists.map(artist => artist.name).join(', ')}` ) );

<!--  -->

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization const token =
'BQCI8jk2SgXHcEQl1FtU-vooycHhf3laOEKFAtnwJYoi1tsRrh5Z9nMPDFaQwbu6oNbehJ2HwNi2JtYTLG5UroO5aq2s_-94USDGZy59V1Tortxyv2Y4R_GYbofDc1UXofqXHxB0wPv0-kfKFttxTgNZll0MJ-ILtpoTxtPay3i0f5WaxZqGkkzuVCQM6NYQlfLRAxJ7xTVqzH0zns_5RcgLLciBak_Pxq-ypecaPvdu2U9E9vKxRNiQmN4AIST8Hn4I6kU3';
async function fetchWebApi(endpoint, method, body) { const res = await fetch(`https://api.spotify.com/${endpoint}`, { headers: { Authorization: `Bearer ${token}`, }, method, body:JSON.stringify(body) }); return await res.json(); } const
topTracksIds = [ '7bxoQkfKwJyzg9lD8Eckva','7J0isBrUxhIYZVdrBOOlIh','5DqSZFvWvSWg5eyCDi0CuW','23RoR84KodL5HWvUTneQ1w','2SmKwCCSiUTjtR8I8rv6MS' ]; async function getRecommendations(){ // Endpoint reference :
https://developer.spotify.com/documentation/web-api/reference/get-recommendations return (await fetchWebApi( `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET' )).tracks; } const recommendedTracks = await
getRecommendations(); console.log( recommendedTracks.map( ({name, artists}) => `${name} by ${artists.map(artist => artist.name).join(', ')}` ) );

<!--  -->

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization const token =
'BQCI8jk2SgXHcEQl1FtU-vooycHhf3laOEKFAtnwJYoi1tsRrh5Z9nMPDFaQwbu6oNbehJ2HwNi2JtYTLG5UroO5aq2s_-94USDGZy59V1Tortxyv2Y4R_GYbofDc1UXofqXHxB0wPv0-kfKFttxTgNZll0MJ-ILtpoTxtPay3i0f5WaxZqGkkzuVCQM6NYQlfLRAxJ7xTVqzH0zns_5RcgLLciBak_Pxq-ypecaPvdu2U9E9vKxRNiQmN4AIST8Hn4I6kU3';
async function fetchWebApi(endpoint, method, body) { const res = await fetch(`https://api.spotify.com/${endpoint}`, { headers: { Authorization: `Bearer ${token}`, }, method, body:JSON.stringify(body) }); return await res.json(); } const
tracksUri = [
'spotify:track:7bxoQkfKwJyzg9lD8Eckva','spotify:track:6pblAIwwwCrXhXWI4LHwma','spotify:track:7J0isBrUxhIYZVdrBOOlIh','spotify:track:49XXrWxrmBU34mNMpxsSfG','spotify:track:5DqSZFvWvSWg5eyCDi0CuW','spotify:track:1Rnx52PUuhrLrj306hOZHb','spotify:track:23RoR84KodL5HWvUTneQ1w','spotify:track:0PMKLfVcJATPZ5IFhUlIuL','spotify:track:2SmKwCCSiUTjtR8I8rv6MS','spotify:track:51qw9DAEYn0RS23LtwZU84'
]; async function createPlaylist(tracksUri){ const { id: user_id } = await fetchWebApi('v1/me', 'GET') const playlist = await fetchWebApi( `v1/users/${user_id}/playlists`, 'POST', { "name": "My recommendation playlist", "description":
"Playlist created by the tutorial on developer.spotify.com", "public": false }) await fetchWebApi( `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`, 'POST' ); return playlist; } const createdPlaylist = await
createPlaylist(tracksUri); console.log(createdPlaylist.name, createdPlaylist.id);

<!--  -->

const playlistId = '4gv4tLyY1Xn7CnmfEltr13'; <iframe title="Spotify Embed: Recommendation Playlist " src={`https://open.spotify.com/embed/playlist/4gv4tLyY1Xn7CnmfEltr13?utm_source=generator&theme=0`} width="100%" height="100%" style={{
minHeight: '360px' }} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
