import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
	children: ReactNode;
}

const Layout = (props: LayoutProps) => {
	return (
		<div className="flex h-screen overflow-hidden bg-slate-50">
			<Sidebar />
			<main className="flex-1 flex flex-col overflow-hidden">
				{props.children}
			</main>
		</div>
	);
};

export default Layout;
