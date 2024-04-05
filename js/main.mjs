import CSSFilterController from './filterCSS.mjs'
import {
  blurInput,
  brightnessInput,
  contrastInput,
  grayscaleInput,
  hueRotateInput,
  invertInput,
  opacityInput,
  resetButton,
  saturateInput,
  sepiaInput,
  codeTextarea,
} from './utils/elements.mjs'

/* 
  Cambiar imagen de previsualización
*/

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
const imagenElemento = document.querySelector('#previewImage')

// Crear una instancia de CSSFilterController
const filterController = new CSSFilterController(imagenElemento)

// Escuahr evento de cambio del input y aplicar filtro

const controller = [
  {
    inputElement: grayscaleInput,
    setter: (value) => filterController.setGrayscale(value),
  },
  {
    inputElement: sepiaInput,
    setter: (value) => filterController.setSepia(value),
  },
  {
    inputElement: blurInput,
    setter: (value) => filterController.setBlur(value),
  },
  {
    inputElement: brightnessInput,
    setter: (value) => filterController.setBrightness(value),
  },
  {
    inputElement: hueRotateInput,
    setter: (value) => filterController.setHueRotate(value),
  },
  {
    inputElement: saturateInput,
    setter: (value) => filterController.setSaturate(value),
  },
  {
    inputElement: contrastInput,
    setter: (value) => filterController.setContrast(value),
  },
  {
    inputElement: opacityInput,
    setter: (value) => filterController.setOpacity(value),
  },
  {
    inputElement: invertInput,
    setter: (value) => filterController.setInvert(value),
  },
]

// Escuchar el evento de cambio de los inputs
// y aplicar el filtro correspondiente
// y actualizar el textarea

controller.forEach((item) => {
  item.inputElement.addEventListener('input', function () {
    item.setter(this.value)
    updateTextarea()
  })
})

// Resetear los filtros
resetButton.addEventListener('click', resetApp)

const updateTextarea = () => {
  codeTextarea.value = filterController.getResultCode()
}

function resetApp() {
  // reiniciar los filtros (lógico)
  filterController.resetFilters()

  // reiniciar los valores de los inputs (visual)
  brightnessInput.value = 100
  contrastInput.value = 100
  grayscaleInput.value = 0
  blurInput.value = 0
  hueRotateInput.value = 0
  saturateInput.value = 100
  sepiaInput.value = 0

  // actualizar el textarea
  updateTextarea()
}
