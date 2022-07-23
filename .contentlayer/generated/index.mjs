// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import { allComponents } from './Component/_index.mjs'
import { allDocs } from './Doc/_index.mjs'

export { allComponents, allDocs }

export const allDocuments = [...allComponents, ...allDocs]
