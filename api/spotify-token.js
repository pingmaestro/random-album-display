// api/spotify-token.js
import axios from 'axios';

export default async function handler(req, res) {
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

    // Ensure Spotify credentials are available
    if (!CLIENT_ID || !CLIENT_SECRET) {
        return res.status(500).json({ error: 'Spotify credentials missing' });
    }

    try {
        // Make the request to Spotify API to fetch the token
        const tokenResponse = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        // Respond with the access token
        res.json(tokenResponse.data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching Spotify token:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch Spotify token' });
    }
}