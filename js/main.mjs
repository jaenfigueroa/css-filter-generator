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

const controllers = [
  {
    inputElement: grayscaleInput,
    setter: filterController.setGrayscale,
  },
  {
    inputElement: sepiaInput,
    setter: filterController.setSepia,
  },
  {
    inputElement: blurInput,
    setter: filterController.setBlur,
  },
  {
    inputElement: brightnessInput,
    setter: filterController.setBrightness,
  },
  {
    inputElement: hueRotateInput,
    setter: filterController.setHueRotate,
  },
  {
    inputElement: saturateInput,
    setter: filterController.setSaturate,
  },
  {
    inputElement: contrastInput,
    setter: filterController.setContrast,
  },
  {
    inputElement: opacityInput,
    setter: filterController.setOpacity,
  },
  {
    inputElement: invertInput,
    setter: filterController.setInvert,
  },
]

// Escuchar el evento de cambio de los inputs
// y aplicar el filtro correspondiente
// y actualizar el textarea

controllers.forEach((item) => {
  item.inputElement.addEventListener('input', function () {
    item.setter.apply(filterController, [this.value])
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
  const filters = filterController.getFilters()

  brightnessInput.value = filters.brightness.default
  contrastInput.value = filters.contrast.default
  grayscaleInput.value = filters.grayscale.default
  blurInput.value = filters.blur.default
  hueRotateInput.value = filters.hueRotate.default
  saturateInput.value = filters.saturate.default
  sepiaInput.value = filters.sepia.default

  // actualizar el textarea
  updateTextarea()
}
