const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/api/fetch-data', async (req, res) => {
    try {
        const { url } = req.query; // передаем URL JSON в запросе
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Ошибка при запросе данных');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
