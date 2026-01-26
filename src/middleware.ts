import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
const privateRoutes = ["/protected"];

export const onRequest = defineMiddleware((context, next) => {
  return next();
});
