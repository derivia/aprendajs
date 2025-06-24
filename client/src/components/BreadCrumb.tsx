interface BreadcrumbProps {
	items: string[];
}

const BreadCrumb = (props: BreadcrumbProps) => {
	return (
		<div className="breadcrumb text-sm text-gray-500 mb-2">
			{props.items.join(" > ")}
		</div>
	);
};

export default BreadCrumb;
