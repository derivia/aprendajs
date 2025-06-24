interface CodeBlockProps {
	language: string;
	code: string;
}

const CodeBlock = (props: CodeBlockProps) => {
	return (
		<div className="code-block bg-slate-50 border border-gray-200 rounded-lg p-5 my-6">
			<div className="code-header flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
				<span className="code-language text-xs text-gray-500 font-semibold uppercase">
					{props.language}
				</span>
				<button className="copy-button bg-transparent border border-gray-200 rounded-md py-1 px-2 text-xs text-gray-500 cursor-pointer transition-all hover:bg-slate-100 hover:border-gray-300">
					Copiar
				</button>
			</div>
			<pre className="code-content text-gray-800 whitespace-pre-wrap text-sm">
				<code>{props.code}</code>
			</pre>
		</div>
	);
};

export default CodeBlock;
