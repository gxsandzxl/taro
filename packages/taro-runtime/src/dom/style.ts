import { isUndefined, toCamelCase, toDashed, Shortcuts, warn } from '@tarojs/shared'
import { styleProperties } from './style_properties'
import { TaroElement } from './element'

function initStyle (ctor: typeof Style) {
  const properties = {}

  for (let i = 0; i < styleProperties.length; i++) {
    const styleKey = styleProperties[i]
    properties[styleKey] = {
      get (this: Style) {
        return this._value[styleKey] || ''
      },
      set (this: Style, newVal: string) {
        const old = this[styleKey]
        if (newVal) {
          this._usedStyleProp.add(styleKey)
        }

        warn(
          styleKey === 'style' && newVal.startsWith('data:image/'),
          '直接在图片地址使用 data64 会造成渲染性能急剧下降，考虑在 CSS 类使用 base64 或其它替代方案。'
        )

        if (old !== newVal) {
          this._value[styleKey] = newVal
          this._element.enqueueUpdate({
            path: `${this._element._path}.${Shortcuts.Style}`,
            value: this.cssText
          })
        }
      }
    }
  }

  Object.defineProperties(ctor.prototype, properties)
}

export class Style {
  public _usedStyleProp: Set<string>

  public _value: Partial<CSSStyleDeclaration>

  public _element: TaroElement

  public constructor (element: TaroElement) {
    this._element = element
    this._usedStyleProp = new Set()
    this._value = {}
  }

  public get cssText () {
    let text = ''
    this._usedStyleProp.forEach(key => {
      const val = this[key]
      if (!val) return
      text += `${toDashed(key)}: ${val};`
    })
    return text
  }

  public set cssText (str: string) {
    if (str == null) {
      str = ''
    }

    this._usedStyleProp.forEach(prop => {
      this.removeProperty(prop)
    })

    if (str === '') {
      return
    }

    const rules = str.split(';')

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i].trim()
      if (rule === '') {
        continue
      }

      const [propName, val] = rule.split(':')
      if (isUndefined(val)) {
        continue
      }
      this.setProperty(propName.trim(), val.trim())
    }
  }

  public setProperty (propertyName: string, value?: string | null) {
    propertyName = toCamelCase(propertyName)
    if (isUndefined(value)) {
      return
    }

    if (value === null || value === '') {
      this.removeProperty(propertyName)
    } else {
      this[propertyName] = value
    }
  }

  public removeProperty (propertyName: string): string {
    propertyName = toCamelCase(propertyName)
    if (!this._usedStyleProp.has(propertyName)) {
      return ''
    }

    const value = this[propertyName]
    this[propertyName] = ''
    this._usedStyleProp.delete(propertyName)
    return value
  }

  public getPropertyValue (propertyName: string) {
    propertyName = toCamelCase(propertyName)
    const value = this[propertyName]
    if (!value) {
      return ''
    }

    return value
  }
}

initStyle(Style)
