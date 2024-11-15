const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from credentials.env
require('dotenv').config({ path: './credentials.env' });


const app = express();
app.use(cors()); // Enable CORS for all origins

// Load Spotify credentials from environment variables
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// Ensure credentials exist
if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET is missing in credentials.env');
    process.exit(1);  
}

// Define the /spotify-token endpoint
app.get('/spotify-token', async (req, res) => {
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

        // Return the token to the client
        res.json(tokenResponse.data);
    } catch (error) {
        console.error('Error fetching Spotify token:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch Spotify token' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

