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
  copyButton,
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
    valueElement: grayscaleInput.nextElementSibling,
  },
  {
    inputElement: sepiaInput,
    setter: filterController.setSepia,
    valueElement: sepiaInput.nextElementSibling,
  },
  {
    inputElement: blurInput,
    setter: filterController.setBlur,
    valueElement: blurInput.nextElementSibling,
  },
  {
    inputElement: brightnessInput,
    setter: filterController.setBrightness,
    valueElement: brightnessInput.nextElementSibling,
  },
  {
    inputElement: hueRotateInput,
    setter: filterController.setHueRotate,
    valueElement: hueRotateInput.nextElementSibling,
  },
  {
    inputElement: saturateInput,
    setter: filterController.setSaturate,
    valueElement: saturateInput.nextElementSibling,
  },
  {
    inputElement: contrastInput,
    setter: filterController.setContrast,
    valueElement: contrastInput.nextElementSibling,
  },
  {
    inputElement: opacityInput,
    setter: filterController.setOpacity,
    valueElement: opacityInput.nextElementSibling,
  },
  {
    inputElement: invertInput,
    setter: filterController.setInvert,
    valueElement: invertInput.nextElementSibling,
  },
]

// Escuchar el evento de cambio de los inputs
// y aplicar el filtro correspondiente
// y actualizar el textarea

controllers.forEach((item) => {
  item.inputElement.addEventListener('input', function () {
    item.setter.apply(filterController, [this.value])
    updateTextarea()
    item.valueElement.textContent = `${this.value}${item.inputElement.dataset.unit || ''}`
  })
})

// Resetear los filtros
resetButton.addEventListener('click', resetApp)

const updateTextarea = () => {
  codeTextarea.value = filterController.getResultCode()
}

const updateLabels = () => {
  const filters = filterController.getFilters()

  brightnessInput.nextElementSibling.textContent =
    filters.brightness.value + filters.brightness.unit
  contrastInput.nextElementSibling.textContent = filters.contrast.value + filters.contrast.unit
  grayscaleInput.nextElementSibling.textContent = filters.grayscale.value + filters.grayscale.unit
  blurInput.nextElementSibling.textContent = filters.blur.value + filters.blur.unit
  hueRotateInput.nextElementSibling.textContent = filters.hueRotate.value + filters.hueRotate.unit
  saturateInput.nextElementSibling.textContent = filters.saturate.value + filters.saturate.unit
  sepiaInput.nextElementSibling.textContent = filters.sepia.value + filters.sepia.unit
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
  updateLabels()
}

copyButton.addEventListener('click', function () {
  navigator.clipboard.writeText(codeTextarea.value)
})
