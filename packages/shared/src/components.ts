import { Shortcuts } from './shortcuts'
import { toDashed, hasOwn, toCamelCase } from './utils'

const styles = {
  style: `i.${Shortcuts.Style}`,
  class: `i.${Shortcuts.Class}`
}

const events = {
  bindtap: 'eh'
}

const touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
}

const alipayEvents = {
  onTap: 'eh',
  onTouchMove: 'eh',
  onTouchEnd: 'eh',
  onTouchCancel: 'eh',
  onLongTap: 'eh'
}

const View = {
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: '',
  ...touchEvents
}

const Icon = {
  type: '',
  size: '23',
  color: ''
}

const Progress = {
  percent: '',
  'show-info': 'fasle',
  'border-radius': '0',
  'font-size': '16',
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: 'false',
  'active-mode': 'backwards',
  duration: '30',
  bindActiveEnd: ''
}

const RichText = {
  nodes: '[]',
  space: ''
}

const Text = {
  selectable: 'false',
  space: '',
  decode: 'false'
}

const Button = {
  size: singleQuote('default'),
  type: singleQuote('default'),
  plain: 'false',
  disabled: '',
  loading: 'false',
  'form-type': '',
  'open-type': '',
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '20',
  'hover-stay-time': '70',
  lang: 'en',
  'session-from': '',
  'send-message-title': '',
  'send-message-path': '',
  'send-message-img': '',
  'app-parameter': '',
  'show-message-card': 'false',
  bindGetUserInfo: '',
  bindContact: '',
  bindGetPhoneNumber: '',
  bindError: '',
  bindOpenSetting: '',
  bindLaunchApp: ''
}

const Checkbox = {
  value: '',
  disabled: '',
  checked: 'false',
  color: singleQuote('#09BB07')
}

const CheckboxGroup = {
  bindChange: ''
}

const Editor = {
  'read-only': 'false',
  placeholder: '',
  'show-img-size': 'false',
  'show-img-toolbar': 'false',
  'show-img-resize': 'false',
  focus: 'false',
  bindReady: '',
  bindFocus: '',
  bindBlur: '',
  bindInput: '',
  bindStatusChange: ''
}

const Form = {
  'report-submit': 'false',
  'report-submit-timeout': '0',
  bindSubmit: '',
  bindReset: ''
}

const Input = {
  value: '',
  type: singleQuote(''),
  password: 'false',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: '',
  maxlength: '140',
  'cursor-spacing': '0',
  'auto-focus': 'false',
  focus: 'false',
  'confirm-type': singleQuote('done'),
  'confirm-hold': 'false',
  cursor: '',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindInput: '',
  bindFocus: '',
  bindBlur: '',
  bindConfirm: '',
  bindKeyboardHeightChange: ''
}

const Label = {
  for: ''
}

const Picker = {
  mode: singleQuote('selector'),
  disabled: '',
  bindCancel: ''
}

const PickerView = {
  value: '',
  'indicator-style': '',
  'indicator-class': '',
  'mask-style': '',
  'mask-class': '',
  bindChange: '',
  bindPickStart: '',
  bindPickEnd: ''
}

const PickerViewColumn = {
  //
}

const Radio = {
  value: '',
  checked: 'false',
  disabled: '',
  color: singleQuote('#09BB07')
}

const RadioGroup = {
  bindChange: ''
}

const Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: '',
  value: '0',
  color: singleQuote('#e9e9e9'),
  'selected-color': singleQuote('#1aad19'),
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': 'false',
  bindChange: '',
  bindChanging: ''
}

const Switch = {
  checked: 'false',
  disabled: '',
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: ''
}

const CoverImage = {
  src: '',
  bindLoad: 'eh',
  bindError: 'eh'
}

const Textarea = {
  value: '',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: '',
  maxlength: '140',
  'auto-focus': 'false',
  focus: 'false',
  'auto-height': 'false',
  fixed: 'false',
  'cursor-spacing': '0',
  cursor: '-1',
  'show-confirm-bar': 'true',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindFocus: '',
  bindBlur: '',
  bindLineChange: '',
  bindInput: '',
  bindConfirm: '',
  bindKeyboardHeightChange: ''
}

const CoverView = {
  'scroll-top': 'false'
}

const MoveableArea = {
  'scale-area': 'false'
}

const MoveableView = {
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindChange: '',
  bindScale: '',
  htouchmove: '',
  vtouchmove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}

const ScrollView = {
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  'enable-flex': 'false',
  'scroll-anchoring': ' false',
  bindScrolltoUpper: '',
  bindScrolltoLower: '',
  bindScroll: ''
}

function singleQuote (s: string) {
  return `'${s}'`
}

const Swiper = {
  'indicator-dots': 'false',
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: 'fasle',
  current: '0',
  interval: '5000',
  duration: '500',
  circular: 'false',
  vertical: 'fasle',
  'previous-margin': '\'0px\'',
  'next-margin': '\'0px\'',
  'display-multiple-items': '1',
  'skip-hidden-item-layout': 'false',
  'easing-function': singleQuote('default'),
  bindChange: '',
  bindTransition: '',
  bindAnimationFinish: ''
}

const SwiperItem = {
  'item-id': ''
}

const FunctionalPageNavigator = {
  version: singleQuote('release'),
  name: '',
  args: '',
  bindSuccess: '',
  bindFail: '',
  bindCancel: ''
}

const Navigator = {
  target: singleQuote('self'),
  url: '',
  'open-type': singleQuote('navigate'),
  delta: '1',
  'app-id': '',
  path: '',
  'extra-data': '',
  version: singleQuote('version'),
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: '',
  bindFail: '',
  bindComplete: ''
}

const Audio = {
  id: '',
  src: '',
  loop: 'false',
  controls: 'false',
  poster: '',
  name: '',
  author: '',
  bindError: '',
  bindPlay: '',
  bindPause: '',
  bindTimeUpdate: '',
  bindEnded: ''
}

const specialEvents = new Set([
  'htouchmove',
  'vtouchmove'
])

const Camera = {
  mode: singleQuote('normal'),
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  'frame-size': singleQuote('medium'),
  bindStop: '',
  bindError: '',
  bindInitDone: '',
  bindScanCode: ''
}

const Image = {
  src: '',
  mode: singleQuote('scaleToFill'),
  webp: 'false',
  'lazy-load': 'false',
  'show-menu-by-longpress': 'false',
  bindError: '',
  bindLoad: ''
}

const LivePlayer = {
  src: '',
  mode: singleQuote('live'),
  autoplay: 'false',
  muted: 'false',
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': 'false',
  'min-cache': '1',
  'max-cache': '3',
  'sound-mode': singleQuote('speaker'),
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  bindStateChange: '',
  bindFullScreenChange: '',
  bindNetStatus: ''
}

const Video = {
  src: '',
  duration: '',
  controls: 'true',
  'danmu-list': '',
  'danmu-btn': '',
  'enable-danmu': '',
  autoplay: 'false',
  loop: 'false',
  muted: 'false',
  'initial-time': '0',
  'page-gesture': 'false',
  direction: '',
  'show-progress': 'true',
  'show-fullscreen-btn': 'true',
  'show-play-btn': 'true',
  'show-center-play-btn': 'true',
  'enable-progress-gesture': 'true',
  'object-fit': singleQuote('contain'),
  poster: '',
  'show-mute-btn': 'false',
  title: '',
  'play-btn-position': singleQuote('bottom'),
  'enable-play-gesture': 'false',
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  'vslide-gesture': 'false',
  'vslide-gesture-in-fullscreen': 'true',
  'ad-unit-id': '',
  bindPlay: '',
  bindPause: '',
  bindEnded: '',
  bindTimeUpdate: '',
  bindFullScreenChange: '',
  bindWaiting: '',
  bindError: '',
  bindProgress: '',
  bindLoadedMetadata: ''
}

const Canvas = {
  type: '',
  'canvas-id': '',
  'disable-scroll': 'false',
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongtap: '',
  bindError: ''
}

const Ad = {
  'unit-id': '',
  'ad-intervals': '',
  bindLoad: '',
  bindError: '',
  bindClose: ''
}

const OfficialAccount = {
  bindLoad: '',
  bindError: ''
}

const OpenData = {
  type: '',
  'open-gid': '',
  lang: singleQuote('en'),
  'default-text': '',
  'default-avatar': '',
  bindError: ''
}

const WebView = {
  src: '',
  bindMessage: '',
  bindLoad: ''
}

const NavigationBar = {
  title: '',
  loading: 'false',
  'front-color': '',
  'background-color': '',
  'color-animation-duration': '0',
  'color-animation-timing-func': singleQuote('linear')
}

const PageMeta = {
  'background-text-style': '',
  'background-color': '',
  'background-color-top': '',
  'background-color-bottom': '',
  'scroll-top': singleQuote(''),
  'scroll-duration': '300',
  'page-style': singleQuote(''),
  'root-font-size': singleQuote(''),
  bindResize: '',
  bindScroll: '',
  bindScrollDone: ''
}

const Block = {}

interface Components {
  [key: string]: Record<string, string>;
}

export function createMiniComponents (components: Components, isAlipay = false) {
  const result: Components = Object.create(null)

  for (const key in components) {
    if (hasOwn(components, key)) {
      const component = components[key]
      const compName = toDashed(key)
      const newComp: Record<string, string> = Object.create(null)
      for (let prop in component) {
        if (hasOwn(component, prop)) {
          let propValue = component[prop]
          if (prop.startsWith('bind') || specialEvents.has(prop)) {
            prop = isAlipay ? prop.replace('bind', 'on') : prop.toLowerCase()
            propValue = 'eh'
          } else if (propValue === '') {
            propValue = `i.${toCamelCase(prop)}`
          } else {
            propValue = `i.${toCamelCase(prop)} || ${propValue || singleQuote('')}`
          }

          newComp[prop] = propValue
        }
      }
      if (compName !== 'block') {
        Object.assign(newComp, styles, isAlipay ? alipayEvents : events)
      }
      result[compName] = newComp
    }
  }

  return result
}

export const internalComponents = {
  View,
  Icon,
  Progress,
  RichText,
  Text,
  Button,
  Checkbox,
  CheckboxGroup,
  Editor,
  Form,
  Input,
  Label,
  Picker,
  PickerView,
  PickerViewColumn,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  CoverImage,
  Textarea,
  CoverView,
  MoveableArea,
  MoveableView,
  ScrollView,
  Swiper,
  SwiperItem,
  FunctionalPageNavigator,
  Navigator,
  Audio,
  Camera,
  Image,
  LivePlayer,
  Video,
  Canvas,
  Ad,
  OfficialAccount,
  OpenData,
  WebView,
  NavigationBar,
  PageMeta,
  Block
}

export const controlledComponent = new Set([
  'input',
  'checkbox',
  'picker-view',
  'radio',
  'slider',
  'textarea'
])

export const focusComponents = new Set([
  'input',
  'textarea',
  'editor'
])
