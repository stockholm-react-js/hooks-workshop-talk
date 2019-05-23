import { dark } from 'mdx-deck/themes'
import highlight from 'react-syntax-highlighter/dist/styles/prism/pojoaque';
// import highlight from 'react-syntax-highlighter/dist/styles/prism/okaidia';
// import highlight from 'react-syntax-highlighter/dist/styles/prism/duotone-space';
// import highlight from 'react-syntax-highlighter/dist/styles/prism/darcula';
// import highlight from 'react-syntax-highlighter/dist/styles/prism/atom-dark';

export default {
  ...dark,
  pre: {
    margin: '.5em auto !important',
    fontSize: '14px !important',
    border: 'none !important',
  },
  code: {
    fontSize: '14px !important',
    border: 'none !important',
  },
  prism: {
    style: highlight,
  }
}
