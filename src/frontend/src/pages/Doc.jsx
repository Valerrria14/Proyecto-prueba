import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  ClipboardList, 
  Clock, 
  FileText, 
  Settings,
  Bell,
  LogOut,
  ChevronDown,
  Search,
  Plus,
  Activity,
  Stethoscope,
  AlertCircle,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

export default function Doc() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchPatient, setSearchPatient] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('inicio');

  const doctors = [
    { id: 1, name: 'Dr. Juan Pérez', specialty: 'Nefrología', avatar: '👨‍⚕️' },
    { id: 2, name: 'Dra. María García', specialty: 'Nefrología', avatar: '👩‍⚕️' },
    { id: 3, name: 'Dr. Carlos López', specialty: 'Medicina Interna', avatar: '👨‍⚕️' }
  ];

  const todayAppointments = [
    { id: 1, time: '8:30 AM', patient: 'Juan Rodríguez', status: 'pending', type: 'Hemodiálisis' },
    { id: 2, time: '9:30 AM', patient: 'María González', status: 'completed', type: 'Control' },
    { id: 3, time: '10:30 AM', patient: 'Pedro Martínez', status: 'pending', type: 'Hemodiálisis' },
    { id: 4, time: '12:00 PM', patient: 'Ana Torres', status: 'pending', type: 'Consulta' }
  ];

  const recentPatients = [
    { id: 1, name: 'Juan Rodríguez', lastVisit: '2025-11-10', status: 'Estable', alert: false },
    { id: 2, name: 'María González', lastVisit: '2025-11-11', status: 'Estable', alert: false },
    { id: 3, name: 'Pedro Martínez', lastVisit: '2025-11-09', status: 'Atención', alert: true },
    { id: 4, name: 'Ana Torres', lastVisit: '2025-11-08', status: 'Estable', alert: false }
  ];

  const menuItems = [
    { id: 'inicio', name: 'Inicio', icon: Calendar },
    { id: 'pacientes', name: 'Pacientes', icon: Users },
    { id: 'historial', name: 'Historia Clínica', icon: FileText },
    { id: 'ordenes', name: 'Órdenes Médicas', icon: ClipboardList },
    { id: 'horarios', name: 'Horarios', icon: Clock },
    { id: 'reportes', name: 'Reportes', icon: Activity },
    { id: 'configuracion', name: 'Configuración', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-slate-800 to-slate-900 text-white transition-all duration-300 flex flex-col shadow-2xl`}>
        {/* Header Sidebar */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="50" r="18" fill="none" stroke="white" strokeWidth="3"/>
                  <path d="M 72 78 Q 72 60, 100 60 Q 128 60, 128 78" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="100" y1="68" x2="100" y2="130" stroke="white" strokeWidth="3"/>
                  <path d="M 100 112 Q 82 112, 82 130 Q 82 148, 100 148" fill="none" stroke="white" strokeWidth="3"/>
                  <path d="M 100 112 Q 118 112, 118 130 Q 118 148, 100 148" fill="none" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              {sidebarOpen && (
                <div>
                  <h1 className="font-bold text-lg">HEMODIÁLISIS</h1>
                  <p className="text-xs text-slate-400">Panel Médico</p>
                </div>
              )}
            </div>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover:bg-slate-700 p-2 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span className="font-medium">{item.name}</span>}
                </button>
              );
            })}
          </div>
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-slate-700">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-700 transition-colors text-slate-300">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Cerrar Sesión</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white shadow-md sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-xl">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  <h1>Hola Dr. {user?.name}</h1>
                </h2>
                <p className="text-slate-600">Nos alegra que estés de regreso</p>
              </div>

              <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <Bell className="w-6 h-6 text-slate-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-xl">
                  <Stethoscope className="w-5 h-5 text-teal-600" />
                  <span className="font-medium text-slate-700">Médico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {/* Selector de Médico */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-6 mb-8">
            <label className="block text-white text-sm font-medium mb-3">
              Selección de Médico:
            </label>
            <div className="relative">
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full px-4 py-3 pr-10 bg-white rounded-xl text-slate-800 font-medium focus:ring-2 focus:ring-teal-400 outline-none appearance-none cursor-pointer"
              >
                <option value="">Seleccione un médico</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Citas de Hoy */}
            <div className="bg-white rounded-2xl shadow-lg p-6 col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Citas Programadas</h3>
                    <p className="text-sm text-slate-500">Hoy - {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Nueva Cita
                </button>
              </div>

              {todayAppointments.length > 0 ? (
                <div className="space-y-3">
                  {todayAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                          {appointment.id}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{appointment.patient}</p>
                          <p className="text-sm text-slate-500">{appointment.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-600 font-medium">{appointment.time}</span>
                        {appointment.status === 'completed' ? (
                          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Completada
                          </div>
                        ) : (
                          <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Pendiente
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-slate-500">No hay paciente asignados para el día de hoy</p>
                </div>
              )}
            </div>

            {/* Estadísticas Rápidas */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8" />
                  <span className="text-3xl font-bold">24</span>
                </div>
                <p className="text-teal-100">Pacientes Activos</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-8 h-8" />
                  <span className="text-3xl font-bold">12</span>
                </div>
                <p className="text-blue-100">Sesiones Hoy</p>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <AlertCircle className="w-8 h-8" />
                  <span className="text-3xl font-bold">3</span>
                </div>
                <p className="text-amber-100">Alertas Médicas</p>
              </div>
            </div>
          </div>

          {/* Búsqueda y Lista de Pacientes */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-800 text-lg">Pacientes Recientes</h3>
              <div className="flex gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchPatient}
                    onChange={(e) => setSearchPatient(e.target.value)}
                    placeholder="Buscar paciente..."
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  Buscar
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-slate-600 font-semibold">Paciente</th>
                    <th className="text-left py-3 px-4 text-slate-600 font-semibold">Última Visita</th>
                    <th className="text-left py-3 px-4 text-slate-600 font-semibold">Estado</th>
                    <th className="text-left py-3 px-4 text-slate-600 font-semibold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPatients.map((patient) => (
                    <tr key={patient.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-semibold">
                            {patient.name.charAt(0)}
                          </div>
                          <span className="font-medium text-slate-800">{patient.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-600">{patient.lastVisit}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit ${
                          patient.alert 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {patient.alert ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                          {patient.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm">
                          Ver Historia
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}