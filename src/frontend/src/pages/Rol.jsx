import { useEffect, useState } from 'react';
import {
  Heart, Mail, Lock, MapPin, Phone, Facebook, Instagram,
  ArrowLeft
} from 'lucide-react';
import logo from '../assets/logo.png';
import Carrusel from '../components/Carrusel';
import { Link, useNavigate } from "react-router-dom";

export default function Rol() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Cargar roles desde backend
  useEffect(() => {
    fetch("http://localhost:3000/api/rol")
      .then((res) => res.json())
      .then((data) => setRoles(data))
      .catch((err) => console.error("Error al cargar roles:", err));
  }, []);

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          roleId: selectedRole // Enviamos el rol seleccionado
        }),
      });

      const data = await res.json();
      console.log("Respuesta del backend:", data);

      if (!data.data?.token) {
        alert("❌ " + (data.message || "Error al iniciar sesión"));
        return;
      }

      const user = data.data.user;
      const token = data.data.token;

      // Guardar datos
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Guardar rol seleccionado
      localStorage.setItem("selectedRoleId", selectedRole);

      alert("✅ Inicio de sesión exitoso");

      // Validar rol REAL del usuario
      const realRoleId = user.roleId; // De la BD
      const selectedRoleId = parseInt(localStorage.getItem("selectedRoleId"), 10);

      if (realRoleId !== selectedRoleId) {
        alert("❌ No perteneces a este rol");
        return;
      }

      // Redirecciones seguras
      if (realRoleId === 1) navigate("/recepcion");
      else if (realRoleId === 2) navigate("/doc"); // Tu Doc.jsx
      else if (realRoleId === 3) navigate("/paciente");
      else alert("❌ Rol no reconocido");

    } catch (error) {
      console.error("Error en login:", error);
      alert("Error al conectar con el servidor");
    }
  };

  // ===========================
  //       FORMULARIO LOGIN
  // ===========================
  if (selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <button
            onClick={() => setSelectedRole(null)}
            className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Logo Hemodiálisis"
                  className="w-40 h-40 mx-auto object-contain" />
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

            {/* FORM */}
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
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500"
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
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 shadow-lg">
                Iniciar sesión
              </button>

              <p className="text-center text-sm text-slate-600 mt-6">
                ¿No tienes cuenta?{" "}
                <Link to="/register" className="font-semibold text-teal-600 hover:text-teal-800">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===========================
  //        BOTONES DE ROLES
  // ===========================
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-[#F0F7FF] shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center text-[#20586A]">
            ROLES
          </h2>

          <div className="flex justify-center gap-12">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => {
                  setSelectedRole(role.id);
                  localStorage.setItem("selectedRoleId", role.id);
                }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${role.color} 
                flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
                  {role.icon}
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                  {role.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Carrusel />

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
        ...
      </footer>
    </div>
  );
}
