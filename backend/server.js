const express = require('express');
const marked = require('marked');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
    const { markdown } = req.body;
    const html = marked.parse(markdown);
    res.send({ html });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
