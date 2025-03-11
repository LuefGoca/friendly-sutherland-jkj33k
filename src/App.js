import React from "react";

const cartas = [
  {
    nombre: "Justicia Social",
    imagen: "https://source.unsplash.com/100x100/?justice",
  },
  {
    nombre: "Derechos Humanos",
    imagen: "https://source.unsplash.com/100x100/?human-rights",
  },
  { nombre: "Empatía", imagen: "https://source.unsplash.com/100x100/?empathy" },
  {
    nombre: "Intervención",
    imagen: "https://source.unsplash.com/100x100/?intervention",
  },
  {
    nombre: "Evaluación",
    imagen: "https://source.unsplash.com/100x100/?evaluation",
  },
  {
    nombre: "Trabajo en comunidad",
    imagen: "https://source.unsplash.com/100x100/?community",
  },
  {
    nombre: "Inclusión",
    imagen: "https://source.unsplash.com/100x100/?inclusion",
  },
  { nombre: "Equidad", imagen: "https://source.unsplash.com/100x100/?equity" },
  {
    nombre: "Participación",
    imagen: "https://source.unsplash.com/100x100/?participation",
  },
  {
    nombre: "Empoderamiento",
    imagen: "https://source.unsplash.com/100x100/?empowerment",
  },
  {
    nombre: "Plan de Acción",
    imagen: "https://source.unsplash.com/100x100/?action-plan",
  },
  {
    nombre: "Estudio de Caso",
    imagen: "https://source.unsplash.com/100x100/?case-study",
  },
  {
    nombre: "Desarrollo Social",
    imagen: "https://source.unsplash.com/100x100/?social-development",
  },
  {
    nombre: "Atención Psicosocial",
    imagen: "https://source.unsplash.com/100x100/?psychosocial",
  },
  {
    nombre: "Mediación",
    imagen: "https://source.unsplash.com/100x100/?mediation",
  },
  {
    nombre: "Resiliencia",
    imagen: "https://source.unsplash.com/100x100/?resilience",
  },
  {
    nombre: "Confidencialidad",
    imagen: "https://source.unsplash.com/100x100/?confidentiality",
  },
  {
    nombre: "Servicio Social",
    imagen: "https://source.unsplash.com/100x100/?social-service",
  },
  {
    nombre: "Trabajo Multidisciplinario",
    imagen: "https://source.unsplash.com/100x100/?multidisciplinary",
  },
  {
    nombre: "Código de Ética",
    imagen: "https://source.unsplash.com/100x100/?ethics",
  },
  {
    nombre: "Orientación",
    imagen: "https://source.unsplash.com/100x100/?guidance",
  },
  {
    nombre: "Salud Mental",
    imagen: "https://source.unsplash.com/100x100/?mental-health",
  },
  {
    nombre: "Vulnerabilidad",
    imagen: "https://source.unsplash.com/100x100/?vulnerability",
  },
  {
    nombre: "Asesoramiento",
    imagen: "https://source.unsplash.com/100x100/?counseling",
  },
];

const generarCartones = (numCartones) => {
  return Array.from({ length: numCartones }, () => {
    const cartasAleatorias = [...cartas]
      .sort(() => 0.5 - Math.random())
      .slice(0, 16);
    return cartasAleatorias;
  });
};

const LoteriaImprimible = () => {
  const cartones = generarCartones(6);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Lotería de Trabajo Social - Versión Imprimible
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cartones.map((carton, index) => (
          <div key={index} className="border p-4 rounded text-center">
            <h2 className="text-lg font-semibold mb-2">Cartón {index + 1}</h2>
            <div className="grid grid-cols-4 gap-2">
              {carton.map((carta, i) => (
                <div
                  key={i}
                  className="border p-2 text-sm flex flex-col items-center"
                >
                  <img
                    src={carta.imagen}
                    alt={carta.nombre}
                    className="w-16 h-16 object-cover mb-2"
                  />
                  <span>{carta.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => window.print()}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Imprimir Cartones
      </button>
    </div>
  );
};

export default LoteriaImprimible;
