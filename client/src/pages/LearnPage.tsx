import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks"; 

import BreadCrumb from "../components/BreadCrumb";
import CodeBlock from "../components/CodeBlock";
import Layout from "../components/Layout";
import { getContent, type PageContent } from "../utils/content";
import { contentMap } from "../content/map";

const LearnPage = () => {
	const [pageContent, setPageContent] = useState<PageContent | null>(null);
	const { chapter, page } = useParams<{ chapter: string; page: string }>();

	const slug = chapter && page ? `${chapter}_${page}` : null;
	const metadata = slug ? contentMap[slug] : null;

	useEffect(() => {
		const loadContent = async () => {
			if (slug) {
				const content = await getContent(slug);
				setPageContent(content);
			}
		};
		loadContent();
	}, [slug]);

	if (!metadata) {
		return (
			<Layout>
				<div>Página não encontrada</div>
			</Layout>
		);
	}

	if (!pageContent) {
		return (
			<Layout>
				<div>Carregando...</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<header className="content-header bg-white p-8 border-b border-gray-200 flex-shrink-0">
				<BreadCrumb items={metadata.breadcrumb} />
				<h1 className="content-title text-3xl font-bold text-gray-900 mb-2">
					{metadata.title}
				</h1>
			</header>
			<div className="content-body flex-1 overflow-y-auto p-8 bg-white">
				<div className="max-w-4xl">
					<div className="prose max-w-none">
						<ReactMarkdown
							remarkPlugins={[remarkGfm, remarkBreaks]}
							components={{
								code({ node, className, children, ...props }) {
									const match = /language-(\w+)/.exec(className || "");
									return match ? (
										<CodeBlock
											language={match[1]}
											code={String(children).replace(/\n$/, "")}
										/>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									);
								},
							}}
						>
							{pageContent.lesson}
						</ReactMarkdown>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default LearnPage;
