// setup/transformers.ts

// This file is used to define custom markdown transformers for Slidev.

// Here, we define a transformer that escapes double opening braces `\{\{`
// within LaTeX math environments to prevent parsing issues.

import { defineTransformersSetup } from '@slidev/types'
import type { MarkdownTransformContext } from '@slidev/types'

function escapeBracesInMath(source: string): string {
  // Replace inside display math first
  source = source.replace(/\$\$([\s\S]*?)\$\$/g, (_m, inner) => {
    const replaced = inner
      .replace(/\\{\\{/g, '\\{\\!\\,\\{')
    return `$$${replaced}$$`
  })

  // Then inline math — use negative lookbehind/lookahead to avoid $$ parts
  source = source.replace(/(?<!\$)\$([^\n]*?)\$(?!\$)/g, (_m, inner) => {
    const replaced = inner
      .replace(/\\{\\{/g, '\\{\\!\\,\\{')
    return `$${replaced}$`
  })

  return source
}

export default defineTransformersSetup(() => ({
  pre: [
    (ctx: MarkdownTransformContext) => {
      const orig = ctx.s.toString()
      const edited = escapeBracesInMath(orig)
      if (edited !== orig) {
        ctx.s.overwrite(0, orig.length, edited)
      }
    },
  ],
}))
