import authors from '~/data/authors.json';
import exhibits from '~/data/exhibits.json';
import locations from '~/data/locations.json';
import themes from '~/data/themes.json';
import volumes from '~/data/volumes.json';

export default [
	{
		"title": "Exhibits",
		"slug": "exhibits",
		"data": exhibits,
	},
	{
		"title": "Locations",
		"slug": "locations",
		"data": locations,
	},
	{
		"title": "Themes",
		"slug": "themes",
		"data": themes,
	},
	{
		"title": "Volumes",
		"slug": "volumes",
		"data": volumes,
	},
	{
		"title": "Authors",
		"slug": "authors",
		"data": authors,
	}
];