import { env } from "@/env"

const API_URL = env.API_URL;
export const blogService = {
  getBlogPost: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`)

    } catch (err) {
      return {
        data: null,
        error: { message: "SomeThing went wrong" }
      }
    }

  }
}