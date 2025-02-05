# Enviopack Challenge Frontend

Este proyecto es una aplicación de tienda de productos desarrollada con React y Vite. A continuación, se detallan las tecnologías y herramientas utilizadas, así como las funcionalidades implementadas.

## Descripción del Proyecto

La aplicación cuenta con las siguientes características:

- **Navbar**: Contiene un enlace a la home, el nombre del usuario, un enlace al carrito que muestra el número de productos cargados y el crédito disponible.
- **Página de Carrito**: Muestra los productos del carrito con la posibilidad de borrarlos, junto con el total de la compra y dos botones: uno para volver al catálogo y otro para finalizar la compra.
- **Home**: Presenta el catálogo de productos donde cada producto tiene una imagen, su nombre, el precio y un botón para agregar o quitar el producto del carrito. Además, cuenta con un buscador por nombre de producto y un select que ordena por precio de menor a mayor y de mayor a menor.

## Tecnologías y Herramientas Utilizadas

- **Gestor de Paquetes**: Utilicé `pnpm` como gestor de paquetes por su eficiencia y rapidez.
- **Linter y Formateo**: Utilicé `biome` para el linting y formateo del código, siguiendo las reglas de estilo de `airbnb` para mantener un código limpio y consistente.
- **Pruebas Unitarias**: Implementé pruebas unitarias con `vitest` para asegurar la funcionalidad de los componentes.
- **Pruebas End-to-End (E2E)**: Utilicé `playwright` para realizar pruebas E2E y verificar el flujo completo de la aplicación.
- **Storybook**: Agregué `storybook` para mostrar y documentar los estilos de los componentes.
- **Enrutamiento**: Utilicé `react-router-dom` para manejar el enrutamiento de la aplicación.
- **LocalStorage**: Utilicé `localStorage` para mantener la información del carrito y así cuando el usuario vuelva a la página, ya tendrá cargado en el carrito lo último que utilizó.

## Funcionalidades Implementadas

- **Loading**: Agregué un indicador de carga al cargar los productos para mejorar la experiencia del usuario.
- **Página 404**: Implementé una página de error 404 para manejar rutas no existentes.
- **Botón de Borrar Producto**: Modifiqué la tarjeta de los productos para incluir un botón que permite borrar el producto directamente desde la tarjeta, evitando que el usuario tenga que ir y volver al carrito. El acceso al carrito está disponible en la barra de navegación.
- **Enlace al Carrito**: El enlace al carrito en la barra de navegación muestra la cantidad de productos en el carrito.
- **Despliegue**: La aplicación está desplegada en Netlify y se puede acceder a través del siguiente enlace: [Enviopack Challenge Frontend](https://enviopack-challenge-frontend-leotardi.netlify.app/).

## Comentarios Adicionales

- **Página de Finalización de Compra**: Considero que la página de finalización de compra es un poco innecesaria y podría haberse solucionado con un Toast para notificar al usuario sobre el estado de la compra.

## Instrucciones de Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/enviopack-challenge-frontend-leotarditi.git
   cd enviopack-challenge-frontend-leotarditi

2. **Instalar las dependencias:**

  ```bash
  pnpm install
  ```

3. **Ejecutar la aplicación en modo desarrollo:**

  ```bash
  pnpm dev
  ```

4. **Ejecutar las pruebas unitarias:**

  ```bash
  pnpm test:unit
  ```

5. **Ejecutar las pruebas E2E:**

  ```bash
  pnpm test:e2e
  ```

6. **Ejecutar Storybook:**

  ```bash
  pnpm storybook
  ```

7. **Construir la aplicación para producción:**

  ```bash
  pnpm build
  ```