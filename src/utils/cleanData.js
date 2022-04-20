const cleanSelectedArticle = (article) => {
    const cleanedArticle = {
        id: article.title,
        title: article.title,
        abstract: article.abstract,
        authors: article.byline,
        section: article.section,
        subsection: article.subsection,
        createdDate: formatDate(article.created_date),
        publishedDate: formatDate(article.published_date),
        images: article.multimedia,
        url: article.short_url,
    }
    return cleanedArticle;
}

const formatDate = (date) => {
    const newDate = date.split('T')[0]
    const [year, month, day] = newDate.split('-')
    return [day, month, year].join('/')
}

export { cleanSelectedArticle, formatDate };