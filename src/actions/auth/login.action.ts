import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const loginUser = defineAction({
  accept: "json",
  input: object,
  handler: async ({}, { cookies }) => {
    try {
      const user = await signInWithEmailAndPassword();
    } catch (error) {}
    return user;
  },
});
