import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/user.css';

export default function User() {
  const [codigo, setCodigo] = useState('');
  const [codigosIngresados, setCodigosIngresados] = useState([]);
  const premios = {
    "123": "Premio 1",
    "456": "Premio 2",
    "789": "Premio 3"
  };

  const manejarCambioCodigo = (e) => {
    setCodigo(e.target.value);
  };

  const registrarCodigo = () => {
    if (codigo.length === 3) {
      const premio = premios[codigo] || "No Ganaste";
      const nuevoCodigo = {
        codigo,
        fecha: new Date().toLocaleDateString(),
        premio
      };

      setCodigosIngresados([...codigosIngresados, nuevoCodigo]);

      if (premios[codigo]) {
        alert(`Felicidades, has ganado: ${premios[codigo]}`);
      } else {
        alert("No Ganaste");
      }

      setCodigo('');
    } else {
      alert("Por favor, ingrese un código de 3 dígitos.");
    }
  };

  return (
    <div className="user-container">
      {/* Sección para ingresar el código */}
      <div className="codigo-ingreso">
        <h2>Registra tus códigos</h2>
        <input
          type="text"
          value={codigo}
          onChange={manejarCambioCodigo}
          placeholder="Ingrese código de 3 dígitos"
          maxLength={3}
          className="form-control"
        />
        <button onClick={registrarCodigo} className="btn btn-primary mt-2">Registrar</button>
        <div className="Volver-link mt-3">
        <Link to="/" className="btn btn-link">Volver</Link>
      </div>
      </div>

      {/* Sección para mostrar los códigos ingresados en una tabla */}
      <div className="codigos-registrados">
        <h3>Códigos Registrados</h3>
        {codigosIngresados.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Código</th>
                <th>Premio</th>
              </tr>
            </thead>
            <tbody>
              {codigosIngresados.map((item, index) => (
                <tr key={index}>
                  <td>{item.fecha}</td>
                  <td>{item.codigo}</td>
                  <td>{item.premio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No has ingresado ningún código aún.</p>
        )}
      </div>
    </div>
  );
}