import type { PageLoad } from './$types';

const posts = ['we-made-a-blog'];

async function fromArticle(slug: string) {
	const article = await import(`./(posts)/${slug}/+page.md`);

	return {
		name: article.metadata.title,
		slug,
		author: article.metadata.author,
		description: article.metadata.description,
		date: article.metadata.date
	};
}

export const load: PageLoad = async ({ params }) => {
	return {
		posts: await Promise.all(posts.map((post) => fromArticle(post)))
	};
};
