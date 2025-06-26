"use client";

import { SessionProvider } from "next-auth/react";

export const SessionProviderC = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};
