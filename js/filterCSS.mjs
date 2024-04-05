class CSSFilterController {
  constructor(element) {
    this.element = element
    this.filters = {
      brightness: {
        name: 'brightness',
        min: 0,
        max: 200,
        default: 100,
        value: 100,
        unit: '%',
      },
      contrast: {
        name: 'contrast',
        min: 0,
        max: 200,
        default: 100,
        value: 100,
        unit: '%',
      },
      grayscale: {
        name: 'grayscale',
        min: 0,
        max: 100,
        default: 0,
        value: 0,
        unit: '%',
      },
      blur: {
        name: 'blur',
        min: 0,
        max: 10,
        default: 0,
        value: 0,
        unit: 'px',
      },
      hueRotate: {
        name: 'hue-rotate',
        min: 0,
        max: 360,
        default: 0,
        value: 0,
        unit: 'deg',
      },
      saturate: {
        name: 'saturate',
        min: 0,
        max: 1000,
        default: 100,
        value: 100,
        unit: '%',
      },
      sepia: {
        name: 'sepia',
        min: 0,
        max: 100,
        default: 0,
        value: 0,
        unit: '%',
      },
      opacity: {
        name: 'opacity',
        min: 0,
        max: 100,
        default: 100,
        value: 100,
        unit: '%',
      },
      invert: {
        name: 'invert',
        min: 0,
        max: 100,
        default: 0,
        value: 0,
        unit: '%',
      },
    }

    // this.applyFilters()
    // this.getFilterCSSCode()
  }

  getFilters() {
    return this.filters
  }

  getFilterValue() {
    let CSSFilterValue = ''

    for (let i in this.filters) {
      const filter = this.filters[i]

      if (filter.value != filter.default) {
        CSSFilterValue += `${filter.name}(${filter.value}${filter.unit}) `
      }
    }

    return CSSFilterValue.trim()
  }

  getResultCode() {
    let code = ''
    const filterCSSValue = this.getFilterValue()

    if (filterCSSValue) {
      code += `filter: ${filterCSSValue};\n`
      code += `-webkit-filter: ${filterCSSValue};\n`
      code += `-moz-filter: ${filterCSSValue};`
    }

    return code.trim()
  }

  applyFilters() {
    this.element.style.filter = this.getFilterValue()
  }

  setBrightness(newValue) {
    this.filters.brightness.value = newValue
    this.applyFilters()
  }

  setContrast(newValue) {
    this.filters.contrast.value = newValue
    this.applyFilters()
  }

  setGrayscale(newValue) {
    this.filters.grayscale.value = newValue
    this.applyFilters()
  }

  setBlur(newValue) {
    this.filters.blur.value = newValue
    this.applyFilters()
  }

  setHueRotate(newValue) {
    this.filters.hueRotate.value = newValue
    this.applyFilters()
  }

  setSaturate(newValue) {
    this.filters.saturate.value = newValue
    this.applyFilters()
  }

  setSepia(newValue) {
    this.filters.sepia.value = newValue
    this.applyFilters()
  }

  setOpacity(newValue) {
    this.filters.opacity.value = newValue
    this.applyFilters()
  }

  setInvert(newValue) {
    this.filters.invert.value = newValue
    this.applyFilters()
  }

  resetFilters() {
    this.filters.brightness.value = this.filters.brightness.default
    this.filters.contrast.value = this.filters.contrast.default
    this.filters.grayscale.value = this.filters.grayscale.default
    this.filters.blur.value = this.filters.blur.default
    this.filters.hueRotate.value = this.filters.hueRotate.default
    this.filters.saturate.value = this.filters.saturate.default
    this.filters.sepia.value = this.filters.sepia.default
    this.filters.opacity.value = this.filters.opacity.default
    this.filters.invert.value = this.filters.invert.default

    this.applyFilters()
  }
}

export default CSSFilterController

// Uso de la clase
// const imageElement = document.getElementById('image')
// const filterController = new CSSFilterController(imageElement)

// Ejemplo de cómo cambiar un filtro
// filterController.setBrightness(150)
