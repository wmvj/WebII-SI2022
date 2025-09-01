import { routes } from "../routes";

export function routeHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url;
    });

    if (route) {
        return route.controler(req, res);
    }
    return res.writeHead(404).end();
}