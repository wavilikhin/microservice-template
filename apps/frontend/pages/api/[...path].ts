import { createProxyMiddleware } from "http-proxy-middleware";

const { API_URL } = process.env

const proxyOptions = {
  target: API_URL,
  secure: false,
  pathRewrite: {
 "^/api": "" 
},
}

const proxy = createProxyMiddleware(proxyOptions);

// @ts-expect-error Types can be omitted here since its just a proxy
export default function handler(req, res) {
  proxy(req, res, (err: unknown) => {
    if (err) {
      throw err;
    }

    throw new Error(
      `Request '${req.url}' is not proxied! You should never reach here, something went wrong!`
    );
  });
}