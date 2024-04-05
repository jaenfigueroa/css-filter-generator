import CSSFilterController from './filterCSS.mjs'

const textarea = document.getElementById('textarea')

// Cambiar imagen de previsualización
const fileInput = document.getElementById('fileInput')
const previewImage = document.getElementById('previewImage')

fileInput.addEventListener('change', function () {
  const file = this.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = function (event) {
      previewImage.src = event.target.result
    }
    reader.readAsDataURL(file)
  } else {
    previewImage.src = '#'
  }
})

// APLICAR FILTROS

// Obtener el elemento de imagen
const imagenElemento = document.getElementById('previewImage')

// Crear una instancia de CSSFilterController
const filterController = new CSSFilterController(imagenElemento)

// Escuahr evento de cambio del input y aplicar filtro

const grayscaleInput = document.getElementById('grayscaleInput')
grayscaleInput.addEventListener('input', function () {
  filterController.setGrayscale(this.value)
})

const sepiaInput = document.getElementById('sepiaInput')
sepiaInput.addEventListener('input', function () {
  filterController.setSepia(this.value)
})

const blurInput = document.getElementById('blurInput')
blurInput.addEventListener('input', function () {
  filterController.setBlur(this.value)
})

const brightnessInput = document.getElementById('brightnessInput')
brightnessInput.addEventListener('input', function () {
  filterController.setBrightness(this.value)
})

const hueRotateInput = document.getElementById('hueRotateInput')
hueRotateInput.addEventListener('input', function () {
  filterController.setHueRotate(this.value)
})

const saturateInput = document.getElementById('saturateInput')
saturateInput.addEventListener('input', function () {
  filterController.setSaturate(this.value)
})

const contrastInput = document.getElementById('contrastInput')
contrastInput.addEventListener('input', function () {
  filterController.setContrast(this.value)
})

const opacityInput = document.getElementById('opacityInput')
opacityInput.addEventListener('input', function () {
  filterController.setOpacity(this.value)
})

const invertInput = document.getElementById('invertInput')
invertInput.addEventListener('input', function () {
  filterController.setInvert(this.value)
})

// addEventListener para todos los inputs y obtener el valor del filtro
const inputs = document.querySelectorAll('input[type="range"]')

inputs.forEach((input) => {
  input.addEventListener('input', function () {
    const value = filterController.getFilterCSSCode()
    textarea.value = value
  })
})

// Resetear los filtros
const resetButton = document.getElementById('resetButton')
resetButton.addEventListener('click', function () {
  brightnessInput.value = 100
  contrastInput.value = 100
  grayscaleInput.value = 0
  blurInput.value = 0
  hueRotateInput.value = 0
  saturateInput.value = 100
  sepiaInput.value = 0

  filterController.resetFilters()
})
