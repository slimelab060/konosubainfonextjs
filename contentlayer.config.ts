import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `other/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', description: 'タイトル', required: true },
    date: { type: 'date', description: '公開日', required: true },
    draft: { type: 'boolean', default: false, required: false },
    //tags: { type: 'list', of: { type: 'string' }, description: 'タグ', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
  },
}));

export const Character = defineDocumentType(() => ({
  name: 'Character',
  filePathPattern: `character/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', description: 'タイトル', required: true },
    date: { type: 'date', description: '公開日', required: true },
    draft: { type: 'boolean', default: false, required: false },
    //tags: { type: 'list', of: { type: 'string' }, description: 'タグ', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Character],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: { children: string | any[] }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: { properties: { className: string[] } }) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
