    import React, { useState, useEffect } from 'react';

    import { 
    Calendar, 
    Users, 
    ClipboardList, 
    Clock, 
    FileText, 
    Settings,
    Bell,
    LogOut,
    Search,
    Plus,
    Phone,
    Mail,
    AlertCircle,
    CheckCircle,
    Menu,
    X,
    UserPlus,
    DollarSign,
    Printer,
    Edit,
    Trash2,
    CreditCard,
    FileCheck,
    UserCheck
    } from 'lucide-react';

    export default function Recepcion() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('inicio');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);


    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    },  []);

    const menuItems = [
        { id: 'inicio', name: 'Inicio', icon: Calendar },
        { id: 'pacientes', name: 'Gestión de Pacientes', icon: Users },
        { id: 'citas', name: 'Agendar Citas', icon: Clock },
        { id: 'registro', name: 'Registro de Llegadas', icon: UserCheck },
        { id: 'pagos', name: 'Pagos y Facturación', icon: DollarSign },
        { id: 'documentos', name: 'Documentos', icon: FileText },
        { id: 'reportes', name: 'Reportes', icon: ClipboardList },
        { id: 'configuracion', name: 'Configuración', icon: Settings }
    ];

    const todayAppointments = [
        { id: 1, time: '8:00 AM', patient: 'Juan Rodríguez', doctor: 'Dr. Pérez', type: 'Hemodiálisis', status: 'arrived', phone: '999-888-777' },
        { id: 2, time: '8:30 AM', patient: 'María Peréz', doctor: 'Dr. Pérez', type: 'Control', status: 'confirmed', phone: '999-777-666' },
        { id: 3, time: '9:00 AM', patient: 'Pedro Martínez', doctor: 'Dra. García', type: 'Hemodiálisis', status: 'pending', phone: '999-666-555' },
        { id: 4, time: '10:00 AM', patient: 'Ana Torres', doctor: 'Dr. López', type: 'Consulta', status: 'pending', phone: '999-555-444' },
        { id: 5, time: '11:00 AM', patient: 'Carlos Díaz', doctor: 'Dr. Pérez', type: 'Hemodiálisis', status: 'confirmed', phone: '999-444-333' }
    ];

    const pendingPayments = [
        { id: 1, patient: 'Juan Rodríguez', amount: 150, service: 'Hemodiálisis', date: '2025-11-11' },
        { id: 2, patient: 'Pedro Martínez', amount: 80, service: 'Consulta', date: '2025-11-11' }
    ];

    const recentPatients = [
        { id: 1, name: 'Juan Rodríguez', dni: '62906611', phone: '999-888-777', lastVisit: '2025-11-10', status: 'Activo' },
        { id: 2, name: 'María González', dni: '87654321', phone: '999-777-666', lastVisit: '2025-11-11', status: 'Activo' },
        { id: 3, name: 'Pedro Martínez', dni: '45678912', phone: '999-666-555', lastVisit: '2025-11-09', status: 'Activo' },
        { id: 4, name: 'Ana Torres', dni: '78912345', phone: '999-555-444', lastVisit: '2025-11-08', status: 'Activo' }
    ];

    const getStatusColor = (status) => {
        switch(status) {
        case 'arrived': return 'bg-green-100 text-green-700';
        case 'confirmed': return 'bg-blue-100 text-blue-700';
        case 'pending': return 'bg-amber-100 text-amber-700';
        case 'cancelled': return 'bg-red-100 text-red-700';
        default: return 'bg-slate-100 text-slate-700';
        }
    };

    const getStatusText = (status) => {
        switch(status) {
        case 'arrived': return 'Llegó';
        case 'confirmed': return 'Confirmada';
        case 'pending': return 'Pendiente';
        case 'cancelled': return 'Cancelada';
        default: return status;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-slate-800 to-slate-900 text-white transition-all duration-300 flex flex-col shadow-2xl`}>
            {/* Header Sidebar */}
            <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                <div className="w-5 h-10 flex items-center justify-center">
                </div>
                {sidebarOpen && (
                    <div>
                    <h1 className="font-bold text-lg">HEMODIALISIS</h1>
                    <p className="text-xs text-slate-400">Panel Recepción</p>
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
            <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
                {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                    <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeSection === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'hover:bg-slate-700 text-slate-300'
                    }`}
                    >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
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
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">
                    <h1>Hola recepcionista {user?.name}</h1>
                    </h2>
                    <p className="text-slate-600">
                        Gestiona las operaciones diarias de la clínica
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Bell className="w-6 h-6 text-slate-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    
                    <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-xl">
                    <UserCheck className="w-5 h-5 text-blue-600" />

                    {/* Rol dinámico */}
                    <span className="font-medium text-slate-700">
                        {user?.role?.name}
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Content Area */}
            <div className="p-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-4 mb-8">
                <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center gap-3">
                <Plus className="w-8 h-8" />
                <span className="font-semibold">Agendar Cita</span>
                </button>
                
                <button className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center gap-3">
                <UserPlus className="w-8 h-8" />
                <span className="font-semibold">Nuevo Paciente</span>
                </button>
                
                <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center gap-3">
                <CreditCard className="w-8 h-8" />
                <span className="font-semibold">Registrar Pago</span>
                </button>
                
                <button className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center gap-3">
                <Printer className="w-8 h-8" />
                <span className="font-semibold">Imprimir Reporte</span>
                </button>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Citas del Día */}
                <div className="bg-white rounded-2xl shadow-lg p-6 col-span-2">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">Citas del Día</h3>
                        <p className="text-sm text-slate-500">{new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    </div>
                    <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                    {todayAppointments.map((appointment) => (
                    <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
                    >
                        <div className="flex items-center gap-4 flex-1">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{appointment.time.split(':')[0]}</div>
                            <div className="text-xs text-slate-500">{appointment.time.split(' ')[1]}</div>
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-slate-800">{appointment.patient}</p>
                            <p className="text-sm text-slate-500">{appointment.doctor} • {appointment.type}</p>
                            <div className="flex items-center gap-2 mt-1">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span className="text-xs text-slate-500">{appointment.phone}</span>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                            {getStatusText(appointment.status)}
                        </span>
                        <div className="flex gap-1">
                            <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors" title="Editar">
                            <Edit className="w-4 h-4 text-blue-600" />
                            </button>
                            <button className="p-2 hover:bg-green-100 rounded-lg transition-colors" title="Marcar llegada">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            </button>
                            <button className="p-2 hover:bg-red-100 rounded-lg transition-colors" title="Cancelar">
                            <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Estadísticas y Pagos Pendientes */}
                <div className="space-y-6">
                {/* Estadísticas */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                    <Clock className="w-8 h-8" />
                    <span className="text-3xl font-bold">{todayAppointments.length}</span>
                    </div>
                    <p className="text-blue-100">Citas Programadas Hoy</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                    <CheckCircle className="w-8 h-8" />
                    <span className="text-3xl font-bold">{todayAppointments.filter(a => a.status === 'arrived').length}</span>
                    </div>
                    <p className="text-green-100">Pacientes Atendidos</p>
                </div>

                {/* Pagos Pendientes */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-slate-800">Pagos Pendientes</h3>
                    </div>
                    <div className="space-y-3">
                    {pendingPayments.map((payment) => (
                        <div key={payment.id} className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="font-semibold text-slate-800 text-sm">{payment.patient}</p>
                        <p className="text-xs text-slate-600">{payment.service}</p>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-lg font-bold text-amber-600">S/ {payment.amount}</span>
                            <button className="px-3 py-1 bg-amber-600 text-white rounded-lg text-xs hover:bg-amber-700 transition-colors">
                            Cobrar
                            </button>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>

            {/* Búsqueda y Lista de Pacientes */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 text-lg">Directorio de Pacientes</h3>
                <div className="flex gap-3">
                    <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar por nombre o DNI..."
                        className="w-96 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Nuevo Paciente
                    </button>
                </div>
                </div>

                <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="border-b-2 border-slate-200">
                        <th className="text-left py-3 px-4 text-slate-600 font-semibold">Paciente</th>
                        <th className="text-left py-3 px-4 text-slate-600 font-semibold">DNI</th>
                        <th className="text-left py-3 px-4 text-slate-600 font-semibold">Teléfono</th>
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
                        <td className="py-4 px-4 text-slate-600">{patient.dni}</td>
                        <td className="py-4 px-4">
                            <div className="flex items-center gap-2 text-slate-600">
                            <Phone className="w-4 h-4 text-slate-400" />
                            {patient.phone}
                            </div>
                        </td>
                        <td className="py-4 px-4 text-slate-600">{patient.lastVisit}</td>
                        <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            {patient.status}
                            </span>
                        </td>
                        <td className="py-4 px-4">
                            <div className="flex gap-2">
                            <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors" title="Ver perfil">
                                <FileText className="w-4 h-4 text-blue-600" />
                            </button>
                            <button className="p-2 hover:bg-green-100 rounded-lg transition-colors" title="Agendar cita">
                                <Calendar className="w-4 h-4 text-green-600" />
                            </button>
                            <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors" title="Llamar">
                                <Phone className="w-4 h-4 text-purple-600" />
                            </button>
                            </div>
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