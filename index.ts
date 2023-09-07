import bodyParser from "body-parser";
import Server from "./classes/server";
import router from "./routes/router";
import cors from "cors";

const server = new Server();

//bodyparser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//cors
server.app.use( cors({origin: true, credentials: true}));

//rutas de servicios
server.app.use('/',router);

server.start(() => {
    console.log(`Server runnng in port ${server.port}`);
})