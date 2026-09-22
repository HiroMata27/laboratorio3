# Laboratorio 3 - React Hooks (useEffect)

## Descripción del proyecto
Proyecto desarrollado para la asignatura de Programación Web (Universidad
Libre, Semestre VI). Es una tienda construida con **React** que utiliza el
hook `useEffect` para consumir la **API pública fakestoreapi.com** y
mostrar en tarjetas un catálogo de productos de electrónica: nombre,
descripción (traducidos al español), imagen y precio.

## Tecnologías utilizadas
- React + Vite
- Bootstrap 5
- Hook useEffect (fetch de datos)
- API pública: https://fakestoreapi.com/products/category/electronics

## Estructura principal
- `src/components/Tienda.jsx` → componente principal que consume la API
  (exportado como `Tienda`, importado como `ApiTienda`)
- `src/components/Tienda.css` → estilos personalizados de las tarjetas
- `src/main.jsx` → punto de entrada, conecta Tienda con Bootstrap

## Cómo ejecutar el proyecto
\`\`\`bash
npm install
npm run dev
\`\`\`

## Autor
Jonathan Estiben Fonseca Cardenas