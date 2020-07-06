import path from 'path';
import fs from 'fs';
import express from 'express';
import { renderer } from './render';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('*', (req, res) => {

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
         renderer(req,data)
        );
    });
});

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});
