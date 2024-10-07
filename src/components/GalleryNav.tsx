import { MapPin, SquareSquare, Tag } from 'lucide-react';
import { useState } from 'react';
import exhibits from '~/data/exhibits.json';
import themes from '~/data/themes.json';
const exhibitOffsets = [
	{ top: '160px', width: '162px', height: '233px' },
	{ top: '160px', left: '165px', width: '171px', height: '214px' },
	{ top: '160px', left: '548px', width: '206px', height: '152px' },
	{ top: '388px', left: '664px', width: '212px', height: '172px' },
	{ top: '194px', left: '756px', width: '266px', height: '140px' },
	{ top: '392px', left: '76px', width: '224px', height: '170px' },
	{ top: '444px', left: '303px', height: '217px', width: '357px' },
];

export default function GalleryNav() {
	const [mode, setMode] = useState('exhibits');
	return (
		<section className="m-auto max-w-screen-lg h-full relative">
			<div className="absolute -right-16 text-white top-[155px] flex flex-col space-y-2">
				<button
					className="rounded-full bg-white/20 p-1 hover:bg-white/40"
					onClick={() => {
						setMode('exhibits');
					}}
				>
					<SquareSquare />
				</button>
				<button
					className="rounded-full bg-white/20 p-1 hover:bg-white/40"
					onClick={() => {
						setMode('location');
					}}
				>
					<MapPin />
				</button>
				<button
					className="rounded-full bg-white/20 p-1 hover:bg-white/40"
					onClick={() => {
						setMode('themes');
					}}
				>
					<Tag />
				</button>
			</div>
			<div className="h-full flex items-center relative">
				{mode === 'exhibits' && (
					<>
						<img className="absolute -z-10" src="/map3.svg" />
						{exhibits.map((exhibit, index) => {
							return (
								<a
									className="absolute text-white flex items-center text-center justify-center px-2 hover:no-underline hover:bg-[rgba(255,255,255,0.15)]"
									style={exhibitOffsets[index]}
									href={`/exhibits/${exhibit.slug}`}
								>
									{exhibit.title}
								</a>
							);
						})}
					</>
				)}
				{mode === 'location' && (
					<>
						{/* <img className="absolute -z-10" src="/locations.svg" /> */}
						<a
							href={`/locations/pacific-northwest`}
							className="absolute -z-0 hover:scale-105 top-[86px] left-[9px]"
						>
							<img src="/pnw.svg" />
						</a>
						<a
							href={`/locations/northeast`}
							className="absolute -z-0 hover:scale-105 top-[126px] left-[828px]"
						>
							<img src="/ne.svg" />
						</a>
						<a
							href={`/locations/southeast`}
							className="absolute -z-0 hover:scale-105 top-[379px] left-[332px]"
						>
							<img src="/south.svg" />
						</a>
						<a
							href={`/locations/southwest`}
							className="absolute -z-0 hover:scale-105 top-[175px] left-[252px]"
						>
							<img src="/midwest.svg" />
						</a>
						<a
							href={`/locations/west-coast`}
							className="absolute -z-0 hover:scale-105 top-[319px] left-[0px]"
						>
							<img src="/west.svg" />
						</a>
						<a
							href={`/locations/midwest`}
							className="absolute -z-0 hover:scale-105 top-[170px] left-[598px]"
						>
							<img src="/greatlakes.svg" />
						</a>
					</>
				)}
				{mode === 'themes' && (
					<div className="grid grid-cols-3 gap-6 w-full h-[80%]">
						{themes.map((theme) => {
							return (
								<a
									className="drop-shadow-sm bg-white/20 flex text-white uppercase font-bold items-center justify-center text-4xl my-4"
									href={`/themes/${theme.slug}`}
								>
									{theme.title}
								</a>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
}
