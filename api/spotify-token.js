const axios = require('axios');

// Environment variables
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('Spotify Client ID or Secret is missing');
    process.exit(1);  // Exit if credentials are not set
}

// Function to handle the API request for the token
module.exports = async (req, res) => {
    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'client_credentials',
            }),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        `${CLIENT_ID}:${CLIENT_SECRET}`
                    ).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        // Respond with the Spotify token
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching token:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch Spotify token' });
    }
};

