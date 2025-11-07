// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React, { useState } from "react";
import "./App.css";

function App() {
  const [filtro, setFiltro] = useState("");

  const platos = [
    { nombre: "Ensalada fresca", precio: 12000 },
    { nombre: "Sopa de verduras", precio: 9000 },
    { nombre: "Batido natural", precio: 8000 },
    { nombre: "Tostadas integrales", precio: 7000 },
  ];

  const platosFiltrados = platos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
     <center><h1 className="text-3xl font-bold text-green-700 mb-4">
    
        🌿 Menú EcoHuerta
      </h1> 
    </center>

      <h3>
      <input type="text" placeholder="Buscar platos..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="border rounded-lg p-2 mb-6 w-64 text-center"
      />

      <ul className="w-64 bg-white shadow-lg rounded-2xl p-4">
        {platosFiltrados.length > 0 ? (
          platosFiltrados.map((plato, i) => (
            <li
              key={i}
              className="flex justify-between border-b py-2 text-green-800"
            >
              <span>{plato.nombre}</span>
              <span>${plato.precio}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No hay resultados</p>
        )}
      </ul>
    </h3>
<center>
      <footer className="mt-6 text-sm text-green-600">
        EcoHuerta © 2025 🌱
      </footer>
      </center>
    </div>
  );
}

export default App;


