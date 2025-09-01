import http from "node:http";
import { jsonHandler } from "./middleware/jsonHandler";
import { routeHandler } from "./middleware/routeHandler";

async function listener(request, response){
    await jsonHandler(request, response);
    routeHandler(request, response);
}

http.createServer(listener).listen(3000);