import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/svg-mdi-v6'
import quasarLang from 'quasar/lang/en-GB'
import type { UserModule } from '~/types'

// Import Quasar css
import 'quasar/src/css/index.sass'

// https://github.com/quasarframework/quasar
// https://quasar.dev/start/vite-plugin#using-quasar
export const install: UserModule = ({ app }) => {
  app.use(Quasar, {
    // plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet,
  })
}
export default install
