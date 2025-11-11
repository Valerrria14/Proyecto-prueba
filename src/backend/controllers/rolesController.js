// controllers/rolesController.js
export const rolesController = {
  getRoles: (req, res) => {
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

    res.json(roles);
  }
};
