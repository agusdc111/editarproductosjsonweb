# Editor de Productos

Este proyecto es una aplicación web para editar un archivo `products.json` que contiene una lista de productos categorizados. La aplicación permite agregar, editar y eliminar productos y categorías, así como guardar los cambios en el archivo JSON.

## Características

- Visualización de productos por categorías.
- Agregar nuevas categorías.
- Agregar, editar y eliminar productos dentro de cada categoría.
- Guardar cambios en el archivo `products.json`.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## Requisitos Previos

- Node.js (https://nodejs.org/)
- npm (Node Package Manager, generalmente se instala junto con Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:

    ```sh
    git clone https://github.com/tu-usuario/editor-de-productos.git
    ```

2. Navega al directorio del proyecto:

    ```sh
    cd editor-de-productos
    ```

3. Instala las dependencias necesarias:

    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor:

    ```sh
    node server.js
    ```

2. Abre tu navegador web y navega a `http://localhost:3000`.

## Estructura del Proyecto

```plaintext
editor-de-productos/
├── products.json
├── index.html
├── styles.css
├── script.js
├── server.js
└── README.md
