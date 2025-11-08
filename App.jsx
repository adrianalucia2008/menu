import React from 'react'
import './App.css'

function App() {
  const menu = [
    { nombre: 'Ensalada fresca', precio: 12000, descripcion: 'Mix de vegetales con vinagreta de limón 🍋' },
    { nombre: 'Sopa de verduras', precio: 9000, descripcion: 'Sopa natural con vegetales frescos 🥕' },
    { nombre: 'Batido natural', precio: 8000, descripcion: 'Frutas frescas y leche vegetal 🍓' },
    { nombre: 'Tostadas integrales', precio: 7000, descripcion: 'Pan integral con aguacate y semillas 🥑' },
  ]

  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      
      {/* 🔹 Barra de navegación */}
      <nav className="bg-green-600 text-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">🌿 EcoHuerta</h1>
          <ul className="flex space-x-6 font-medium">
            <li className="hover:text-green-200 cursor-pointer">Inicio</li>
            <li className="hover:text-green-200 cursor-pointer">Menú</li>
            <li className="hover:text-green-200 cursor-pointer">Contacto</li>
          </ul>
        </div>
      </nav>

      {/* 🔹 Contenido principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-10">
        <h2 className="text-4xl font-bold text-green-700 mb-3 drop-shadow-md">Menú Saludable</h2>
        <p className="text-gray-700 mb-10">Comida natural, deliciosa y nutritiva 🌱</p>

        {/* Cuadrícula del menú */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
          {menu.map((plato, index) => (
            <div
              key={index}
              className="bg-white/90 border border-green-200 rounded-2xl shadow-md p-5 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{plato.nombre}</h3>
              <p className="text-gray-600 mb-3">{plato.descripcion}</p>
              <span className="block text-green-800 font-bold text-lg">
                ${plato.precio.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* 🔹 Pie de página */}
      <footer className="bg-green-700 text-white py-4 text-center mt-10">
        <p>EcoHuerta © 2025 — Comida saludable con amor 🥗</p>
      </footer>
    </div>
  )
}

export default App

