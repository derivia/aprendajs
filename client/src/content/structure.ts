interface PageMeta {
	slug: string;
	title: string;
	isSubChapter?: boolean;
}

interface Section {
	title: string;
	pages: PageMeta[];
}

export const structure: Section[] = [
	{
		title: "Começando",
		pages: [
			{ slug: "ch1_pg1", title: "Introdução" },
			{ slug: "ch1_pg2", title: "Configurando o Ambiente" },
		],
	},
	{
		title: "Sintaxe Básica",
		pages: [
			{ slug: "ch1_pg3", title: "Variáveis e Tipos" },
			{ slug: "ch1_pg4", title: "Operadores" },
		],
	},
	{
		title: "Controle de Fluxo",
		pages: [
			{ slug: "ch2_pg1", title: "Condicionais" },
			{ slug: "ch2_pg2", title: "Laços de Repetição" },
		],
	},
	{
		title: "Estruturas de Dados",
		pages: [
			{ slug: "ch3_pg1", title: "Arrays" },
			{ slug: "ch3_pg2", title: "Objetos" },
		],
	},
	{
		title: "Funções",
		pages: [
			{ slug: "ch4_pg1", title: "Fundamentos de Funções" },
			{ slug: "ch4_pg2", title: "Escopo" },
		],
	},
	{
		title: "Tópicos Avançados",
		pages: [
			{ slug: "ch5_pg1", title: "ES6 e Além" },
			{ slug: "ch5_pg2", title: "JavaScript Assíncrono" },
		],
	},
	{
		title: "Outros recursos",
		pages: [{ slug: "ch6_pg1", title: "Links úteis" }],
	},
];
