import { Link } from "react-router-dom";

/*
 * Requer: react, react-router-dom, typescript & tailwindcss
 * Página padrão 404 - Não Encontrada.
 */
const NotFound = () => {
	return (
		<div className="h-screen text-3xl flex flex-col gap-3 justify-center items-center">
			<p>404 - Página não encontrada</p>
			<Link className="flex flex-col justify-center" to="/">
				<span className="rounded w-fit shadow self-center bg-gray-300 p-2">
					Voltar ao Início
				</span>
			</Link>
		</div>
	);
};

export default NotFound;
