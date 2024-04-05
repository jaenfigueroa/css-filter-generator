import CSSFilterController from './filterCSS.mjs'

// Recoger datos de un formulario
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)
  console.log(data)
})

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

// Ejemplo: ajustar el brillo de la imagen
filterController.setBrightness(150) // Esto aumentará el brillo al 150%
