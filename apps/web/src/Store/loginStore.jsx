import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const useUserinfo = (set) => ({
  user: null,
  loginUser: (user) => {
    set({ user: user.email });
  },
});

const useLoggedinUser = create(
  devtools(
    persist(useUserinfo, {
      name: "userinfo",
    })
  )
);

export default useLoggedinUser;
