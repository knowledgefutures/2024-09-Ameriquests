import authors from '~/data/authors.json';
import articleLinks from '~/data/links';


export const getArticleAuthors = (articleId:string) => {
	const activeLinkIds = articleLinks.filter((link)=>{
		return link.sourceArticle === articleId;
	}).map((link)=>{
		return link.target;
	});
	const activeAuthors = authors.filter((author)=>{
		return activeLinkIds.includes(author.id);
	}).map((author)=>{
		return author.title;
	});
	return activeAuthors.join(', ');

}