import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { createUserWithEmailAndPassword, type AuthError } from "firebase/auth";
import { firebase } from "src/firebase/config";

export const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),

  handler: async ({ name, email, password, remember_me }, { cookies }) => {
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        path: "/",
      }); // 30 days
    } else {
      cookies.delete("email", { path: "/" });
    }

    //creacion d'usuari a la base de dades (simulada aquí)
    try {
      const user = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password,
      );
      //actualizar el nommbre
      //verificar el correo elecronico
      return {
        uid: user.user.uid,
        email: user.user.email,
      };

      //return user;
    } catch (error) {
      const firebaseError = error as AuthError;

      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("El correo ya está en uso");
      }
      throw new Error("Error registering user");
    }

    return { ok: true, msg: `User ${name} registered successfully` };
  },
});
