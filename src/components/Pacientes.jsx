import { useState } from 'react';
import user from '../assets/user.png';
import {motion} from 'framer-motion'; 
import {fadeIn } from '../variants';

const pacientes = [
  { id: 1, nombre: "Juan Pérez", carnet: "123456" },
  { id: 2, nombre: "Pérez Juan", carnet: "123456" },
  { id: 3, nombre: "Pedro Pérez", carnet: "123456" },

];

const Pacientes = () => {
  // Estado para la paginación, suponiendo que cargas los pacientes de forma paginada desde tu backend
  const [paginaActual, setPaginaActual] = useState(1);
  
  // Aquí iría la lógica para obtener los pacientes según la página actual
  
  return (
    
    <motion.div 
    variants={fadeIn('up',0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}
    
    className="container mx-auto mt-32">
        <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Lista de Pacientes</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">Lista de todos los pacientes registrados:</p>    
            </div>
      <div className="bg-white shadow-xl rounded-lg p-6">
       
        <motion.div 
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        
        className="flex flex-col items-center -mx-3 mb-6">
          {/* Iterar sobre la lista de pacientes y mostrarlos */}
          {pacientes.map((paciente) => (
            <div key={paciente.id} className="w-full flex flex-col items-center mb-4">
              {/* Cada paciente en su propia card */}
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow space-y-3 w-full max-w-sm">
                <img src={user} alt="Paciente" className="w-20 rounded-full" />
                <div>
                  <h2 className="text-lg font-semibold">{paciente.nombre}</h2>
                  <p className="text-gray-600">{paciente.carnet}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* 1 la paginación */}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className="flex justify-center mt-6">
          <button 
            className="mx-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300" 
            onClick={() => setPaginaActual(paginaActual - 1)}
            disabled={paginaActual <= 1}
          >
            Anterior
          </button>
          <button 
            className="btnPrimary"
            onClick={() => setPaginaActual(paginaActual + 1)}
          >
            Siguiente
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Pacientes;
