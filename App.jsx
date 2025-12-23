// App.jsx
import React, { useState } from "react";

// 🌀 Importa tus vistas aquí:
import TaxonomyCoralScene from "./TaxonomyCoralScene";
// import TuOtraView from "./TuOtraView";
// import FractalSchrodinger from "./FractalSchrodinger";
// import ... etc.

// 📚 Catálogo de Vistas/Galería
const VIEWS = [
    {
        id: "coral",
        name: "Sistema Coral 3D",
        description: "Mapa coral dinámico de voces inter-escala.",
        component: <TaxonomyCoralScene />
    },
    {
        id: "placeholder1",
        name: "Fractal Rizomático",
        description: "Estructura rizoma–fractal en expansión dinámica.",
        component: <div className='placeholder'>Fractal pendiente</div>
    },
    {
        id: "placeholder2",
        name: "Toro de Schrödinger",
        description: "Topología toroidal cuántica.",
        component: <div className='placeholder'>Torus pendiente</div>
    },
    {
        id: "placeholder3",
        name: "Mapa Cuántico-Afectivo",
        description: "Diagrama entrelazado cuántico/afectivo.",
        component: <div className='placeholder'>Mapa cuántico pendiente</div>
    }
];

export default function App() {
    const [activeViewId, setActiveViewId] = useState(VIEWS[0].id);

    const activeView = VIEWS.find((v) => v.id === activeViewId);

    return (
        <div className="app-root">
            {/* Sidebar del Menú */}
            <aside className="sidebar">
                <h1 className="sidebar-title">Galería ∑ SyncEros</h1>

                <nav className="sidebar-menu">
                    {VIEWS.map((view) => (
                        <button
                            key={view.id}
                            className={`menu-item ${activeViewId === view.id ? "active" : ""
                                }`}
                            onClick={() => setActiveViewId(view.id)}
                        >
                            <span className="menu-name">{view.name}</span>
                            <span className="menu-description">{view.description}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Vista Activa */}
            <main className="view-container">{activeView.component}</main>
        </div>
    );
}
