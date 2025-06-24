export interface PageContent {
	lesson: string;
}

export const getContent = async (slug: string): Promise<PageContent> => {
	try {
		const response = await fetch(`/src/content/${slug}.md`);
		if (!response.ok) {
			throw new Error(`Content for ${slug} not found`);
		}
		const lessonText = await response.text();
		return { lesson: lessonText };
	} catch (error) {
		console.error("Error fetching content:", error);
		return {
			lesson: "## Error\n\nCould not load content for this page.",
		};
	}
};
