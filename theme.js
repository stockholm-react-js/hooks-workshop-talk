import { dark } from 'mdx-deck/themes'
import highlight from 'react-syntax-highlighter/dist/styles/prism/duotone-space';

export default {
  ...dark,
  pre: {
    width: 'min-content',
    margin: '.5em auto !important',
  },
  prism: {
    style: highlight,
  }
}
