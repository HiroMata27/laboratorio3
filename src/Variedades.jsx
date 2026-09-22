import { useState, useEffect } from "react";
import "./styles.css";

function Variedades() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products || []);
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
      <h1 className="text-center mb-4">Catálogo de Artículos Deportivos</h1>
      <div className="row">
        {productos.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card producto-card h-100">
              <img
                src={item.thumbnail}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text descripcion">{item.description}</p>
                <p className="card-text fw-bold mt-auto">
                  ${item.price} — ⭐ {item.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Variedades;