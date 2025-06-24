import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

interface ExerciseProps {
	content: string;
}

const Exercise = (props: ExerciseProps) => {
	return (
		<div className="exercise-section bg-slate-50 border border-gray-200 rounded-xl p-6 my-8">
			<div className="prose max-w-none">
				<ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
					{props.content}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default Exercise;
