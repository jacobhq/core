import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `components/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    },
    wordCount: {
      type: 'number',
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    },
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  },
}))

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the letter',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the letter',
      required: true,
    },
    unlisted: {
      type: 'boolean',
      description: 'Whether or not to show on the main homepage feed'
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    },
    wordCount: {
      type: 'number',
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    },
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Component, Doc],
})