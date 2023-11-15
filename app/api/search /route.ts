import { allDocs } from 'contentlayer/generated'
import { createSearchAPI } from 'next-docs-zeta/search/server'
 
export const { GET } = createSearchAPI('simple', {
  indexes: allDocs.map(docs => ({
    title: docs.title,
    content: docs.body.raw,
    url: '/docs/' + docs.slug
  }))
})
