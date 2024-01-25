import queryString from "query-string";
import CONFIG from "../configs";

export async function getUsers(options = {}) {
	const defaultOptions = {
		page: 1,
		results: CONFIG.DEFAULT_AMOUNT,
		format: "json",
		seed: CONFIG.API_KEY,
		nat: "gb",
		inc: CONFIG.DEFAULT_USER_DATA,
	};

	const finalOptions = {
		...defaultOptions,
		...options,
	};

	const query = queryString.stringify(finalOptions);

	const res = await fetch(`${CONFIG.BASE_URL}?${query}`);

	const { results: users } = await res.json();

	return users;
}
