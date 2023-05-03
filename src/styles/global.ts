import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,

    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',

    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
})
