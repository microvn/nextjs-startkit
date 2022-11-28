import NextAuth from "next-auth"

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		// GithubProvider({
		// 	clientId: "Iv1.d8d2719a988370c6",
		// 	clientSecret: "89dfffe66ad2029d9f965970d67934266696fdd5",
		// }),
		{
			id: "githubx",
			name: "GitHub",
			type: "oauth",
			clientId: "Iv1.d8d2719a988370c6",
			clientSecret: "89dfffe66ad2029d9f965970d67934266696fdd5",
			authorization: {
				url: "https://github.com/login/oauth/authorize",
				params: {scope: "read:user user:email"},
			},
			token: "https://github.com/login/oauth/access_token",
			userinfo: {
				url: "https://api.github.com/user",
				async request({client, tokens}) {
					console.log('tokens', tokens)
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					const profile = await client.userinfo(tokens.access_token)

					if (!profile.email) {
						// If the user does not have a public email, get another via the GitHub API
						// See https://docs.github.com/en/rest/users/emails#list-public-email-addresses-for-the-authenticated-user
						const res = await fetch("https://api.github.com/user/emails", {
							headers: {Authorization: `token ${tokens.access_token}`},
						})

						if (res.ok) {
							const emails = await res.json()
							profile.email = (emails.find((e) => e.primary) ?? emails[0]).email
						}
					}

					return profile
				},
			},
			profile(profile) {
				console.log('profile', profile)
				return {
					id: profile.id.toString(),
					name: profile.name ?? profile.login,
					email: profile.email,
					image: profile.avatar_url,
				}
			},
			style: {
				logo: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/github.svg",
				logoDark:
					"https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/github-dark.svg",
				bg: "#0000ff",
				bgDark: "#0000ff",
				text: "#000",
				textDark: "#fff",
			}
		}
	],
}
export default NextAuth(authOptions)
