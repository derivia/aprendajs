interface ContentMeta {
	title: string;
	breadcrumb: string[];
}

export const contentMap: { [key: string]: ContentMeta } = {
	ch1_pg1: {
		title: "Introdução ao JavaScript",
		breadcrumb: ["Começando"],
	},
	ch1_pg2: { title: "Configurando o Ambiente", breadcrumb: ["Começando"] },
	ch1_pg3: {
		title: "Variáveis e Tipos de Dados",
		breadcrumb: ["Sintaxe Básica"],
	},
	ch1_pg4: {
		title: "Operadores",
		breadcrumb: ["Sintaxe Básica"],
	},
	ch2_pg1: { title: "Condicionais", breadcrumb: ["Controle de Fluxo"] },
	ch2_pg2: { title: "Laços de Repetição", breadcrumb: ["Controle de Fluxo"] },
	ch3_pg1: { title: "Arrays", breadcrumb: ["Estruturas de Dados"] },
	ch3_pg2: { title: "Objetos", breadcrumb: ["Estruturas de Dados"] },
	ch4_pg1: { title: "Fundamentos de Funções", breadcrumb: ["Funções"] },
	ch4_pg2: { title: "Escopo", breadcrumb: ["Funções"] },
	ch5_pg1: { title: "ES6 e Além", breadcrumb: ["Tópicos Avançados"] },
	ch5_pg2: {
		title: "JavaScript Assíncrono",
		breadcrumb: ["Tópicos Avançados"],
	},
	ch6_pg1: {
		title: "Outros recursos",
		breadcrumb: ["Links úteis"],
	},
};
