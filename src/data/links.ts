import authorLinks from '~/data/linksArticleAuthor.json';
import exhibitLinks from '~/data/linksArticleExhibit.json';
import locationLinks from '~/data/linksArticleLocation.json';
import themeLinks from '~/data/linksArticleTheme.json';
import volumeLinks from '~/data/linksArticleVolume.json';

export default [
	...authorLinks,
	...exhibitLinks,
	...locationLinks,
	...themeLinks,
	...volumeLinks,
];