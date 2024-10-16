import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h3>{children}</h3>,
    h2: ({ children }) => <h4>{children}</h4>,
    h3:  ({ children }) => <h5>{children}</h5>,
    h4:  ({ children }) => <h6>{children}</h6>,
    ul: ({children}) => <ul style={{marginLeft: '1.5rem'}}>{children}</ul>,
    p:  ({ children }) => <p style={{marginBottom: '1rem'}}> {children}</p>,
    ...components,
  }
}

declare module '*.mdx' {
  // This is the export key for the frontmatter (defined in the next.config.mjs file)
  // If the shape of the frontmatter gets more complex, we can define a better type
  // here or use a runtime validator like zod.
  export const frontmatter: any;
}
