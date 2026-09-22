import React, { useEffect, useState } from "react";
import "./Tienda.css";

// Traducciones de los productos fijos de la categoría "electronics"
const traducciones = {
  9: {
    titulo: "Disco Duro Externo Portátil WD 2TB Elements - USB 3.0",
    descripcion:
      "Compatible con USB 3.0 y USB 2.0. Transferencia de datos rápida y mejor rendimiento en PC. Alta capacidad, formateado en NTFS.",
  },
  10: {
    titulo: "SSD SanDisk PLUS 1TB Interno - SATA III 6 Gb/s",
    descripcion:
      "Actualización fácil para un arranque, apagado y carga de aplicaciones más rápidos, comparado con un disco duro tradicional de 5400 RPM.",
  },
  11: {
    titulo: "SSD Silicon Power 256GB 3D NAND A55 - SATA III 2.5\"",
    descripcion:
      "La tecnología 3D NAND ofrece altas velocidades de transferencia y un rendimiento general mejorado en el arranque del sistema.",
  },
  12: {
    titulo: "Disco Externo WD 4TB Gaming Drive - Compatible con PS4",
    descripcion:
      "Expande tu experiencia de juego en PS4. Portátil, fácil de configurar, diseño elegante con alta capacidad y garantía del fabricante de 3 años.",
  },
  13: {
    titulo: "Monitor Acer SB220Q 21.5 pulgadas Full HD IPS Ultra Delgado",
    descripcion:
      "Pantalla panorámica IPS Full HD (1920x1080) de 21.5 pulgadas con tecnología Radeon FreeSync.",
  },
  14: {
    titulo: "Monitor Curvo Samsung 49\" CHG90 144Hz Gaming Ultrapanorámico",
    descripcion:
      "Monitor curvo súper ultrapanorámico 32:9 de 49 pulgadas, equivalente a dos pantallas de 27 pulgadas unidas.",
  },
};

export const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const traducidos = data.map((item) => ({
          ...item,
          title: traducciones[item.id]?.titulo || item.title,
          description: traducciones[item.id]?.descripcion || item.description,
        }));
        setProductos(traducidos);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al consumir la API:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="text-center mt-5">Cargando productos...</p>;
  }

  return (
    <div className="container mt-4 mb-5">
      <h1 className="text-center mb-4">Productos - Electrónica</h1>
      <div className="row">
        {productos.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card producto-card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text descripcion">{item.description}</p>
                <p className="card-text fw-bold mt-auto">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};