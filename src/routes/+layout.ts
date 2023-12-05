export const prerender = true;
export const trailingSlash = 'always';

export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};
