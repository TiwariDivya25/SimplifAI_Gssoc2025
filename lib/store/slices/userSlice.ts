import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	email: "",
	loggedIn: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login(state, action) {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.loggedIn = true;
		},
		logout(state) {
			state.name = "";
			state.email = "";
			state.loggedIn = false;
		},
	},
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
