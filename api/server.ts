import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import api from './routes/router';

const app: express.Application = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.static('../../client/build'));
app.use('/api', api);

app.get('/ping', function (req, res) {
	return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile('../../client/build', 'index.html');
});

console.log('hi!');
console.log('listening on port:', process.env.PORT || 8080);
app.listen(port);
