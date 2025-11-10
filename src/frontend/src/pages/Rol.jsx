import { useState } from 'react';
import { Heart, Mail, Lock, MapPin, Phone, Facebook, Instagram, ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';
import Carrusel from '../components/Carrusel';

export default function Rol() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login con:', { role: selectedRole, email, password });
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
      <Carrusel></Carrusel>

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