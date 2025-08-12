import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { getToken } from "~/lib/api/auth/getToken";

export const server = {
  AuthUser: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      password: z.string(),
    }),
    handler: async (input) => {
      const { email, password } = input;

      try {
        const token = await getToken(email, password);

        if (!token) {
          throw new ActionError({
            code: "UNAUTHORIZED",
            message: "Credenciales inválidas",
          });
        }

        return {
          success: true,
          token,
        };
      } catch (error) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "Error de autenticación",
        });
      }
    },
  }),
};
