/*import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  },
    []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a mi pagina 🏡</h1>
      {token && (
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          Cerrar Sesion
        </button>
      )}
      {token ? (
        <div>
          <p className="text-green-600 text-xl">Haz iniciado exitosamente</p>
        </div>
      ) : (
        <div>
          <p className="text-red-600 text-xl">
            Parece que no haz iniciado sesion
          </p>
          <Link to="/login" className="mt-4 inline-block text-blue-500">
            Ir a la pagina de Login
          </Link>
        </div>
      )}
    </div>
  );
}
export default Home;*/




import { Heart, Activity, Calendar, Shield, Clock } from 'lucide-react';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Carrusel from '../components/Carrusel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Logo y título principal */}
        <div className="text-center mb-16">
          <div className="mb-8">
            {/* logo*/}
            <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center">
              <img
              src={logo}
              alt="Logo Hemodiálisis"
              className="w-40 h-40 mx-auto object-contain"/>
            </div>
          </div>
          <h1
          className="text-7xl font-bold mb-4 tracking-tight"
          style={{ color: '#20586A' }} >
              HEMODIALISIS
          </h1>

          <p className="text-2xl text-slate-600 font-light">
            Especialistas en tu salud!
          </p>
        </div>

        {/* Características en grid */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Atención Integral</h3>
            <p className="text-slate-600">
              Cuidado personalizado y profesional para cada uno de nuestros pacientes
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Monitoreo Continuo</h3>
            <p className="text-slate-600">
              Seguimiento en tiempo real de todos los tratamientos y evolución médica
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Gestión de Citas</h3>
            <p className="text-slate-600">
              Sistema eficiente de programación y organización de sesiones
            </p>
          </div>
        </div>

        {/* Características adicionales */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 flex items-center gap-4 shadow-md">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Seguridad Garantizada</h4>
              <p className="text-sm text-slate-600">Protección total de datos médicos e información personal</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 flex items-center gap-4 shadow-md">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-1">Disponibilidad 24/7</h4>
              <p className="text-sm text-slate-600">Acceso constante al sistema para profesionales de la salud</p>
            </div>
          </div>
        </div>

        {/* Mensaje motivacional y botón */}
        <div className="text-center">
          <div className="mt-8 mb-10">  
            <Link
              to="/rol"
              className="bg-[#E4EAF2] text-[#18313A] font-bold text-xl px-16 py-5 rounded-2xl border-2 border-[#ABADB1] shadow-md transition-all duration-500 hover:bg-gradient-to-r hover:from-[#A2D9E6] hover:to-[#7B6ABF] hover:text-[#18313A] inline-block text-center">
              INGRESAR
            </Link>
          </div>

          <div className="bg-gradient-to-r from-red-900 to-red-800 text-white px-10 py-6 rounded-2xl shadow-2xl mb-8 w-[1150px] mx-auto flex justify-center">
            <div className="flex items-center gap-4">
              <Heart className="w-10 h-10" fill="currentColor" />
              <p className="text-2xl font-medium text-center">
                Empieza a cuidarte ahora mismo
              </p>
            </div>                 
          </div>
        </div>
      </div>
    </div>
  );
}
