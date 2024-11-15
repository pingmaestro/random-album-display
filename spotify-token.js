const axios = require('axios');
require('dotenv').config({ path: './credentials.env' }); // Load environment variables from .env file

module.exports = async (req, res) => {
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

    if (!CLIENT_ID || !CLIENT_SECRET) {
        return res.status(500).json({ error: 'SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET is missing' });
    }

    try {
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

        res.json(tokenResponse.data); // Return the token to the client
    } catch (error) {
        console.error('Error fetching Spotify token:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch Spotify token' });
    }
};

