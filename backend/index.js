const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Load environment variables for local development only
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: './credentials.env' }); // Ensure loading from local .env file
}

const app = express();

// Enable CORS for a specific origin (replace with your frontend domain)
app.use(cors({
    origin: 'https://pingmaestro.github.io' // Replace with your frontend domain
}));

// Load Spotify credentials from environment variables
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// Ensure credentials are set
if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET is missing in environment variables');
    process.exit(1);
}

// Define the /spotify-token endpoint
app.get('/api/spotify-token', async (req, res) => {
    try {
        const tokenResponse = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }), // Request body
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        // Return the access token
        res.json(tokenResponse.data);
    } catch (error) {
        console.error('Error fetching Spotify token:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch Spotify token' });
    }
});

// Start the server (Vercel will automatically assign the correct port)
const PORT = process.env.PORT || 3000; // Ensure you can run locally and on Vercel
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

