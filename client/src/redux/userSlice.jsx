import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loggedInUser: null, // Track the currently logged-in user
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getEmp: (state, action) => {
      state.users = action.payload.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        empId: user.empId,
      }));
    },
    addEmp: (state, action) => {
      state.users.push(action.payload);
    },
    deleteEmp: (state, action) => {
      const id = action.payload.id;
      state.users = state.users.filter((u) => u.id !== id);
    },
    registerEmp: (state, action) => {
      const { name, email, password } = action.payload;
      const newUser = {
        name,
        email,
        password,
      };
      state.users.push(newUser);
    },
    loginEmp: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.loggedInUser = user;
      }
    },
  },
});

export const { getEmp, addEmp, deleteEmp, registerEmp, loginEmp } =
  userSlice.actions;
export default userSlice.reducer;
