import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  console.log(`Request made to: ${context.request.url}`);

  return next();
});
