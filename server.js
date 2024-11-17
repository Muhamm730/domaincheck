const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// Simulating Domain Registration API request
app.post('/register-domain', async (req, res) => {
    const { domain, apiKey } = req.body;

    // GoDaddy API endpoint (Replace with actual registrar API endpoint)
    const apiUrl = `https://api.godaddy.com/v1/domains/available?domain=${domain}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `sso-key ${apiKey}`,
            },
        });

        // Check availability
        if (response.data.available) {
            // Proceed to register the domain (replace with actual registrar logic)
            res.status(200).json({ message: `Domain ${domain} is available! Proceed to registration.` });
        } else {
            res.status(400).json({ message: `Domain ${domain} is already taken.` });
        }
    } catch (error) {
        res.status(500).json({ message: "Error checking domain availability", error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
