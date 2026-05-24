import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theme.css' 

import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import CoreuiVue from '@coreui/vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGauge, faUser, faUsers, faBars, faBell,
  faGem, faChartLine, faRightFromBracket,faChevronRight,   
  faFileLines, faCalendar, faChartBar, faGear, faSun, faMoon, faCube,
  faMagnifyingGlass, faPlus, faTable, faPen, faTrash, faSort,faSortUp,
  faSortDown, faSpinner, faInbox, faChevronLeft, faCircleUser, faCircleInfo,
  faClockRotateLeft, faUserPlus, faRightToBracket, faCheck, faPhone, faLocationDot,
  faChevronDown, faCircle, faEnvelope, faLock, faEye, faEyeSlash, faEdit, faUpload, faDownload,faSync,
  faList, faExclamationTriangle, faFileCsv, faFileExcel, faFilePdf, faRotateLeft, faTrashCan, faCircleLeft, 
  faCircleRight, faLink, faArrowTrendUp, faArrowTrendDown, faArrowRight, faChartPie, faShieldHalved, faPalette,
  faFloppyDisk, faCamera, faDesktop, faMobileScreen, faBan, faClock, faHome, faWindowRestore, faCircleQuestion,
  faTerminal, faCode, faRotate, faWandMagicSparkles, faArrowLeft, faCircleCheck, faXmark,faTableList, faBullseye,
  faWallet,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGauge, faUser, faUsers, faBars, faBell,faGem, faChartLine, faRightFromBracket,
  faChevronRight, faFileLines, faCalendar, faChartBar, faGear , faSun, faMoon, faCube,
  faMagnifyingGlass, faPlus, faTable, faPen, faTrash, faSort, faSortUp, faSortDown,
  faSpinner, faInbox, faChevronLeft,faCircleUser, faCircleInfo, faClockRotateLeft,
  faUserPlus, faRightToBracket, faCheck, faPhone, faLocationDot,faChevronDown, faCircle,
  faEnvelope, faLock, faEye, faEyeSlash, faEdit, faUpload, faDownload, faSync, faList, faExclamationTriangle,
  faFileCsv, faFileExcel, faFilePdf, faRotateLeft, faTrashCan, faCircleLeft,
  faCircleRight,faChartPie,faLink,faArrowTrendUp, faArrowTrendDown, faArrowRight,
  faShieldHalved, faPalette, faFloppyDisk, faCamera, faDesktop, faMobileScreen, 
  faBan, faClock, faHome, faWindowRestore,faCircleQuestion, faTerminal, faCode, faRotate,
  faWandMagicSparkles, faArrowLeft, faArrowRight, faUserPlus, faCircleCheck, faXmark, faTableList, faBullseye,
  faWallet,
)

const app = createApp(App)

app.use(router)
app.use(CoreuiVue)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')