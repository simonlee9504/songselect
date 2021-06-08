import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app: express.Application = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.static('../../client/build'));

app.get('/ping', function (req, res) {
	return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile('../../client/build', 'index.html');
});

console.log('wow!');
console.log('listening on port:', process.env.PORT || 8080);
app.listen(port);
