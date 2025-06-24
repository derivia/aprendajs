import { Link, NavLink, useParams } from "react-router-dom";
import { structure } from "../content/structure";

const Sidebar = () => {
	const { chapter, page } = useParams<{ chapter: string; page: string }>();
	const currentPageKey = chapter && page ? `${chapter}_${page}` : "";

	return (
		<nav className="sidebar w-72 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
			<div className="sidebar-header p-6 border-b border-slate-100">
				<div className="logo text-2xl font-bold text-gray-900 mb-1">
					AprendaJS
				</div>
				<div>
					Feito por <Link target="_blank" className="bg-blue-200 px-2 hover:bg-blue-400 transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg rounded-md" to="https://lorrran.com">derivia</Link>
				</div>
			</div>

			<div className="chapter-list py-4">
				{structure.map((section, sectionIndex) => (
					<div key={sectionIndex} className="chapter-section mb-6">
						<div className="section-title px-5 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
							{section.title}
						</div>
						{section.pages.map((pageMeta) => {
							const isSubChapter = pageMeta.isSubChapter;
							const isActive = currentPageKey === pageMeta.slug;
							return (
								<NavLink
									key={pageMeta.slug}
									to={`/learn/${pageMeta.slug.replace("_", "/")}`}
									className={`chapter-item block py-2.5 px-5 text-sm font-medium border-l-4 
                    ${isSubChapter ? "pl-12" : ""}                     
                    ${
											isActive
												? "bg-gray-100 text-blue-600 border-blue-600"
												: "text-gray-600 border-transparent hover:bg-slate-50 hover:text-gray-800"
										}`}
								>
									{pageMeta.title}
								</NavLink>
							);
						})}
					</div>
				))}
			</div>
		</nav>
	);
};

export default Sidebar;
