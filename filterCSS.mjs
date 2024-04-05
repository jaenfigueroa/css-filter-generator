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
    }
    this.applyFilters()
  }

  applyFilters() {
    const filterValue = Object.keys(this.filters)
      .map((key) => `${key}(${this.filters[key]}%)`)
      .join(' ')

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
}

export default CSSFilterController

// Uso de la clase
// const imageElement = document.getElementById('image')
// const filterController = new CSSFilterController(imageElement)

// Ejemplo de cómo cambiar un filtro
// filterController.setBrightness(150)
