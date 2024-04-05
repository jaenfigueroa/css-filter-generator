class CSSFilterController {
  constructor(element) {
    this.element = element
    this.filters = {
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      blur: 0,
      hueRotate: 0,
      saturate: 100,
      sepia: 0,
      opacity: 100,
      invert: 0,
    }
    this.applyFilters()
    this.getCSSFilterValue()
  }

  applyFilters() {
    const filterValue = `
      brightness(${this.filters.brightness}%)
      contrast(${this.filters.contrast}%)
      grayscale(${this.filters.grayscale}%)
      blur(${this.filters.blur}px)
      hue-rotate(${this.filters.hueRotate}deg)
      saturate(${this.filters.saturate}%)
      sepia(${this.filters.sepia}%)
      opacity(${this.filters.opacity}%)
      invert(${this.filters.invert}%)
    `

    this.element.style.filter = filterValue
  }

  setBrightness(value) {
    this.filters.brightness = value
    this.applyFilters()
  }

  setContrast(value) {
    this.filters.contrast = value
    this.applyFilters()
  }

  setGrayscale(value) {
    this.filters.grayscale = value
    this.applyFilters()
  }

  setBlur(value) {
    this.filters.blur = value
    this.applyFilters()
  }

  setHueRotate(value) {
    this.filters.hueRotate = value
    this.applyFilters()
  }

  setSaturate(value) {
    this.filters.saturate = value
    this.applyFilters()
  }

  setSepia(value) {
    this.filters.sepia = value
    this.applyFilters()
  }

  setOpacity(value) {
    this.filters.opacity = value
    this.applyFilters()
  }

  setInvert(value) {
    this.filters.invert = value
    this.applyFilters()
  }

  resetFilters() {
    this.filters = {
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      blur: 0,
      hueRotate: 0,
      saturate: 100,
      sepia: 0,
      opacity: 100,
      invert: 0,
    }
    this.applyFilters()
  }

  getCSSFilterValue() {
    const filterValue = `
filter: ${this.element.style.filter};
-webkit-filter: ${this.element.style.filter};
-moz-filter: ${this.element.style.filter};`

    // -o-filter: ${this.element.style.filter};
    // -ms-filter: ${this.element.style.filter};

    // console.log(filterValue)
    return filterValue.trim()
  }
}

export default CSSFilterController

// Uso de la clase
// const imageElement = document.getElementById('image')
// const filterController = new CSSFilterController(imageElement)

// Ejemplo de cómo cambiar un filtro
// filterController.setBrightness(150)
