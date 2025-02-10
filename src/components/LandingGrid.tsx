import { useState, useEffect } from 'react';
import exhibits from '~/data/exhibits.json';
import themes from '~/data/themes.json';
import volumes from '~/data/volumes.json';
import locations from '~/data/locations.json';
import { sections } from '~/utils/sections';
import LandingCard from './LandingCard';

export default function LandingGrid() {
	const [mode, setMode] = useState('');

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const section = params.get('section');
		if (section) {
			setMode(section.toLowerCase());
		} else {
			setMode('exhibits');
		}
	}, []);

	return (
		<div>
			<div className="flex justify-between uppercase font-black text-sm py-8 sm:text-xl md:text-2xl lg:text-4xl md:py-20">
				{sections.map((section) => {
					const isActive = mode === section.title.toLowerCase();
					return (
						<a
							href={
								section.title == 'Exhibits'
									? '/'
									: `/?section=${section.title.toLowerCase()}`
							}
							className={`tracking-wider text-[#F6F3EE] ${section.colorClass} ${isActive ? 'underine' : 'opacity-60'}`}
						>
							{section.title}
						</a>
					);
				})}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{mode === 'exhibits' && exhibits.map((exhibit) => <LandingCard type="exhibits" {...exhibit} />)}
				{mode === 'locations' && locations.map((location) => <LandingCard type="locations" {...location} />)}
				{mode === 'themes' && themes.map((theme) => <LandingCard type="themes" {...theme} />)}
				{mode === 'volumes' && volumes.map((volume) => <LandingCard type="v" {...volume} />)}
			</div>
		</div>
	);
}
