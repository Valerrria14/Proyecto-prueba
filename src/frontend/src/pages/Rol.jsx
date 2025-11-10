import React, { useState } from 'react';
import { Heart, Mail, Lock, MapPin, Phone, Facebook, Instagram, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import ahoraImg from '../assets/3.webp';
import especializadosImg from '../assets/4.png';
import profeImg from '../assets/2.webp';
import maquiImg from '../assets/dialisis.jpg';
import exaImg from '../assets/exmane.webp';


export default function Rol() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const roles = [
    {
      id: 'recepcionista',
      name: 'Recepcionista',
      icon: '🛎️',
      color: 'from-blue-200 to-gray-300'
    },
    {
      id: 'medico',
      name: 'Médico',
      icon: '🩺',
      color: 'from-teal-200 to-gray-300'
    },
    {
      id: 'paciente',
      name: 'Paciente',
      icon: '👤',
      color: 'from-purple-200 to-gray-300'
    }
  ];

  const carouselItems = [
    {
      title: 'AHORA',
      subtitle: 'Conecta con profesionales',
      description: 'podrás ahorrar tus tratamientos, recetas y quedarás en manos del especialista.',
      image: profeImg,
      gradient: 'from-rose-50 to-[#9B9B9A]'
    },
    {
      title: 'PORQUÉ',
      subtitle: 'Servicio personalizado',
      description: 'te brindamos un espacio completo, tranquilidad ante nuestros profesionales.',
      image: ahoraImg,
      gradient: 'from-amber-50 to-[#9B9B9A]'
    },
    {
      title: 'ESPECIALIZADOS',
      subtitle: 'Expertos en cuidado renal',
      description: 'nuestro equipo es HEMODIÁLISIS y DIÁLISIS PERITONEAL.',
      image: especializadosImg,
      gradient: 'from-blue-50 to-[#9B9B9A]'
    },
    {
      title: 'REALIZAMOS',
      subtitle: 'Exámenes especializados',
      description: 'realizamos pruebas, solo para monitorear la protección de cualquier órgano.',
      image: exaImg,
      gradient: 'from-green-50 to-[#9B9B9A]'
    },
    {
      title: 'CONTAMOS',
      subtitle: 'Tecnología avanzada',
      description: 'para una mejor atención y diagnóstico para nuestra salud.',
      image: maquiImg,
      gradient: 'from-violet-50 to-[#9B9B9A]'
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login con:', { role: selectedRole, email, password });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  if (selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <button
            onClick={() => setSelectedRole(null)}
            className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span></span>
          </button>

          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img
                src={logo}
                alt="Logo Hemodiálisis"
                className="w-40 h-40 mx-auto object-contain"/>
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">HEMODIALISIS</h1>
              <p className="text-slate-600">Especializados en hemodiálisis y diálisis peritoneal</p>
            </div>

            <div className="mb-6 text-center">
              <div className="text-4xl mb-2">
                {roles.find(r => r.id === selectedRole)?.icon}
              </div>
              <h2 className="text-xl font-semibold text-slate-700">
                {roles.find(r => r.id === selectedRole)?.name}
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Correo Electrónico *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hemodialisis@gmail.com"
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contraseña *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese su contraseña"
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header con Roles */}
      <div className="bg-[#F0F7FF] shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center text-[#20586A]">ROLES</h2>
          <div className="flex justify-center gap-12">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className="flex flex-col items-center gap-3 group"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {role.icon}
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {role.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carrusel */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl shadow-2xl p-12 relative overflow-hidden">
          <div className={`bg-gradient-to-br ${carouselItems[currentSlide].gradient} absolute inset-0 opacity-50`}></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>
              
              <div className="text-center flex-1">
                <h2 className="text-5xl font-bold text-slate-800 mb-3">
                  {carouselItems[currentSlide].title}
                </h2>
                <p className="text-2xl text-slate-700 font-medium mb-4">
                  {carouselItems[currentSlide].subtitle}
                </p>
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>
            </div>

            <div className="text-center">
                <div className="mb-6 flex justify-center">
                    <img
                    src={carouselItems[currentSlide].image}
                    alt={carouselItems[currentSlide].title}
                    className="w-72 h-64 object-contain rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                    {carouselItems[currentSlide].description}
                </p>
                </div>


            <div className="flex justify-center gap-2 mt-8">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-slate-700 w-8'
                      : 'bg-slate-400 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-12 mb-8">
            {/* Información */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" fill="currentColor" />
                HEMODIALISIS
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Centro especializado en tratamientos de hemodiálisis y diálisis peritoneal. 
                Comprometidos con tu salud y bienestar.
              </p>
            </div>

            {/* Información de contacto */}
            <div>
              <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">
                    Av. Zabala #462<br />
                    Pucallpa, Ucayali, Perú
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <p className="text-slate-300">+51 972 244 293</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <p className="text-slate-300">hemodialisis@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div>
              <h3 className="text-xl font-bold mb-4">Información</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button className="hover:text-teal-400 transition-colors">
                    Aviso de privacidad
                  </button>
                </li>
                <li>
                  <button className="hover:text-teal-400 transition-colors">
                    Términos y condiciones
                  </button>
                </li>
                <li>
                  <button className="hover:text-teal-400 transition-colors">
                    Política de privacidad
                  </button>
                </li>
                <li>
                  <button className="hover:text-teal-400 transition-colors">
                    Reglas de promoción
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 flex justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 HEMODIALISIS. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-slate-700 hover:bg-teal-600 flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-700 hover:bg-teal-600 flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}