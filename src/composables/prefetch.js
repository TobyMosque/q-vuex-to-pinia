import { ref } from "vue";

export const enabled = ref(process.env.MODE !== "ssr" || process.env.SERVER);
export async function usePreFetch(preFetch) {
  if (enabled.value) {
    await preFetch();
  }
}
