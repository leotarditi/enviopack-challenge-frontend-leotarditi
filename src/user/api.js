import { profile } from "./profile.json"

export default {
  fetch: () =>
    new Promise((resolve) => setTimeout(() => resolve({ profile }), 1000)),
  credit: {
    update: (amount) => Promise.resolve({ amount }),
  },
}
