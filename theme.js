import { dark } from 'mdx-deck/themes'
import highlight from 'react-syntax-highlighter/dist/styles/prism/duotone-space';

export default {
  ...dark,
  prism: {
    style: highlight,
  }
}
