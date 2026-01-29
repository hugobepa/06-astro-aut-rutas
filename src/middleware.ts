import { defineMiddleware } from "astro:middleware";
import { firebase } from "./firebase/config";

// `context` and `next` are automatically typed
const privateRoutes = ["/protected"];
const notAuthenticatedRoutes = ["/login", "/register"];

export const onRequest = defineMiddleware((context, next) => {
  const isLoggedIn = !!firebase.auth.currentUser;
  const user = firebase.auth.currentUser;

  context.locals.isLoggedIn = isLoggedIn;

  if (user) {
    context.locals.user = {
      avatar: user.photoURL ?? "",
      email: user.email!,
      name: user.displayName!,
      emailVerified: user.emailVerified,
    };
  }

  if (!isLoggedIn && privateRoutes.includes(context.url.pathname)) {
    return context.redirect("/");
  }

  if (isLoggedIn && notAuthenticatedRoutes.includes(context.url.pathname)) {
    return context.redirect("/");
  }

  return next();
});
