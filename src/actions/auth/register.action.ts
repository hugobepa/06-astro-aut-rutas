import { defineAction } from "astro:actions";
import { z } from "astro/zod";

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

    return { ok: true, msg: `User ${name} registered successfully` };
  },
});
