import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import usePacientesStore from '../../store/pacientesStore';

const RegistroCita = (idAsistenteP) => {
  // Estados para almacenar los datos del formulario
  const [idtipoCita, setTipoCita] = useState('');
  const [idhorario, setHorario] = useState('');
  const [idpaciente, setPaciente] = useState('');
  const [idasistente, setAsistente] = useState('');
  const [hora, setHora] = useState('');
  const [fecha, setFecha] = useState('');
  const [razon, setRazon] = useState('');
  const [estatus, setEstatus] = useState(false); // Estado de la cita

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construir el objeto de datos de la cita
    const citaData = {
      idtipoCita,
      idhorario,
      idpaciente,
      idasistente,
      hora,
      fecha,
      razon,
      estatus,
    };
    try {
      // Aquí puedes realizar una llamada a tu backend para registrar la cita
      console.log('Cita registrada:', citaData);
      // Mostrar un mensaje de éxito
      alert('Cita registrada exitosamente');
      // Limpiar el formulario después del registro exitoso
      setTipoCita('');
      setHorario('');
      setPaciente('');
      setAsistente('');
      setHora('');
      setFecha('');
      setRazon('');
      setEstatus(false);
    } catch (error) {
      console.error('Error al registrar la cita:', error);
      // Mostrar un mensaje de error si ocurrió algún problema durante el registro
      alert('Ocurrió un error al registrar la cita');
    }
  };
  //obtener Tipos de citas, doctor y horarios
  const [tiposCitas, fetchTiposCitas] = usePacientesStore();
  const [doctores, fetchDoctores] = usePacientesStore();
  const [horarios, fetchHorarios] = usePacientesStore();
  const [pacientes, fetchPaciente] = usePacientesStore();
  useEffect(() => {
    fetchTiposCitas();
    fetchDoctores();
    fetchPaciente();
  }, []);
  const handleDoctorChange = (doctorID) => {
    fetchHorarios(doctorID);
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className="container mx-auto mt-32"
    >
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-center text-3xl font-extrabold mb-4 text-primary">Registro de Cita</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campos del formulario */}
          {/* Tipo de cita */}
          <div>
            <label htmlFor="tipoCita" className="block text-sm font-medium text-gray-700">Tipo de Cita</label>
            <select
              id="tipoCita"
              value={idtipoCita}
              onChange={(e) => setTipoCita(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Selecciona un tipo de cita</option>
              {tiposCitas.map((tipoCita) => (
                <option key={tipoCita.id} value={tipoCita.id}>{tipoCita.nombre}</option>
              ))}
            </select>
          </div>
          {/* Doctor */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Doctor</label>
            <select
              id="doctor"
              value={iddoctor}
              onChange={(e) => handleDoctorChange(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Selecciona un doctor</option>
              {doctores.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>{doctor.nombre}</option>
              ))}
            </select>
          </div>
          {/* Horario */}
          <div>
            <label htmlFor="horario" className="block text-sm font-medium text-gray-700">Horario</label>
            <select
              id="horario"
              value={idhorario}
              onChange={(e) => setHorario(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Selecciona un horario</option>
              {horarios.map((horario) => (
                <option key={horario.id} value={horario.id}>{horario.hora}</option>
              ))}
            </select>

          </div>
          
          {/* Paciente */}
          <div>
            <label htmlFor="paciente" className="block text-sm font-medium text-gray-700">Paciente</label>
            <select
              id="paciente"
              value={idpaciente}
              onChange={(e) => setPaciente(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Selecciona un paciente</option>
              {pacientes.map((paciente) => (
                <option key={paciente.id} value={paciente.id}>{paciente.nombre}</option>
              ))}
            </select>
          </div>
          
          {/* Asistente */}
          <div>
            <label htmlFor="asistente" className="block text-sm font-medium text-gray-700">Asistente</label>
            <input
              type="text"
              id="asistente"
              value={asistente}
              onChange={(e) => setAsistente(e.target.value)}
              placeholder="Ingrese el nombre del asistente"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          {/* Hora */}
          <div>
            <label htmlFor="hora" className="block text-sm font-medium text-gray-700">Hora</label>
            <input
              type="time"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          {/* Fecha */}
          <div>
            <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          {/* Razón */}
          <div>
            <label htmlFor="razon" className="block text-sm font-medium text-gray-700">Razón</label>
            <textarea
              id="razon"
              value={razon}
              onChange={(e) => setRazon(e.target.value)}
              placeholder="Ingrese la razón de la cita"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
            ></textarea>
          </div>
          
          {/* Estatus */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Estatus</span>
            <button
              type="button"
              onClick={() => setEstatus(!estatus)}
              className={`${estatus ? 'bg-green-500' : 'bg-red-500'} rounded-full px-3 py-1 text-white`}
            >
              {estatus ? 'Activo' : 'Inactivo'}
            </button>
          </div>
          
          {/* Botón de registro */}
          <button
            type="submit"
            className="w-full py-2 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300"
          >
            Registrar
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default RegistroCita;