import 'tailwindcss/tailwind.css';
import { Windmill } from '@windmill/react-ui';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

function MyApp({ Component, pageProps }) {
  return <Windmill><Component {...pageProps} /></Windmill>
}

export default MyApp
