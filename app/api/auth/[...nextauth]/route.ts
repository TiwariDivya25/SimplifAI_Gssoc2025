import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";
const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt" as const,
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;
				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});
				if (!user) return null;
				const isValid = await compare(credentials.password, user.password);
				if (!isValid) return null;

				return { id: user.id, name: user.name, email: user.email };
			},
		}),
		// Add OAuth providers here (Google, Github, etc.)
	],
	pages: {
		signIn: "/signin", // Optional: custom sign in page
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
