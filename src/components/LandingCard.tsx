interface Props {
	type: string;
	title: string;
	slug: string;
};

export default function LandingCard({type, title, slug}: Props) {
	

	return (
		<div className="flex items-center justify-center h-64 bg-white shadow-md rounded-lg text-center bg-opacity-20 backdrop-blur-lg">
			<a href={`/${type}/${slug}`} className="text-2xl font-bold text-white">{title}</a>
		</div>
	);
}
