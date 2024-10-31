
import "comand-frontend-framework/styles"

import { createApp } from 'vue'
import App from './src/IconFonts.vue'

/* begin imports from comand-component-library ---------------------------------------------------------------------------------------- */
/* import css for global-styles */
import 'comand-component-library/src/assets/styles/component-library-global-styles.scss'

/* import css for global transitions */
import 'comand-component-library/src/assets/styles/transitions.css'

/* import generated css from components */
import 'comand-component-library/dist/style.css'

/* import css for your custom styles */
import 'comand-component-library/src/assets/styles/template.css'
/* end imports from comand-component-library ---------------------------------------------------------------------------------------- */
/* import additional iconfont containing editmode-icons */
import './src/fonts/editmode-iconfont/editmode-iconfont.css'

/* import additional iconfont containing company-logos */
import './src/fonts/logos-iconfont/logos-iconfont.css'

/* import additional iconfont containing medical-icons */
import './src/fonts//medical-iconfont/medical-iconfont.css'
/* begin imports from prims-plugin (for styling syntax) ---------------------------------------------------------------------------------------- */
// import "prismjs/themes/prism-twilight.css"
/* end imports from prims-plugin (for styling syntax) ---------------------------------------------------------------------------------------- */

/* import css for demopage only */
import 'comand-frontend-framework/demopage-only.css'

// import clickout-event
import "clickout-event"

createApp(App).mount('#app')

