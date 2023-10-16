import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: import('contentlayer/source-files').ComputedFields = {
  url: {
    type: 'string',
    resolve: (post) => `${post._raw.flattenedPath}`,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
};

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
  computedFields,
}));

export const Character = defineDocumentType(() => ({
  name: 'Character',
  filePathPattern: `character/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', description: 'タイトル', required: true },
    date: { type: 'date', description: '公開日', required: true },
    draft: { type: 'boolean', default: false, required: false },
    tags: { type: 'list', of: { type: 'string' }, description: 'タグ', required: true },
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
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        { behaviour: 'wrap' },
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
