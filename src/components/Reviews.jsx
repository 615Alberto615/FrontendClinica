import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; // Asegúrate de tener esta animación configurada.

// Imágenes de ejemplo, puedes reemplazarlas con las que necesites
import doctorImage1 from '../assets/rev.png';


// Datos constantes para las reseñas
const reviews = [
  {
    id: 1,
    image: doctorImage1,
    text: "Excelente atención y profesionalismo. Altamente recomendado.",
    name: "Juan Perez",
  },
  {
    id: 2,
    image: doctorImage1,
    text: "Una experiencia muy positiva, el tratamiento fue efectivo.",
    name: "Micaela Perez",
  },
  {
    id: 3,
    image: doctorImage1,
    text: "Gracias por el cuidado y la atención dedicada. Me siento mucho mejor.",
    name: "Juan Diaz",
  },
  {
    id: 4,
    image: doctorImage1,
    text: "Excelente atención y profesionalismo. Altamente recomendado.",
    name: "Gabriela Portugal",
  },
  {
    id: 5,
    image: doctorImage1,
    text: "Una experiencia muy positiva, el tratamiento fue efectivo.",
    name: "Diego Alvarado",
  },
  {
    id: 6,
    image: doctorImage1,
    text: "Gracias por el cuidado y la atención dedicada. Me siento mucho mejor.",
    name: "Limbert Quispe",
  }

];

const Reviews = () => {
  return (
  <div className="bg-white p-3 relative">
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 no-background"  id='precios'>
      <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Nuestras Reseñas</h2>
          <p className="text-tartiary md:w-1/3 mx-auto px-4">Mira lo que nuestros pacientes tienen que decir sobre nosotros.
        </p>   
      </div>
      <div className="my-24 px-4 max-w-screen-2xl mx-auto">
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide" // Utiliza Tailwind CSS para el diseño
      >
        {reviews.map((review) => (
          <motion.div key={review.id} className="snap-center shrink-0 first:pl-4 last:pr-4 mx-11">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 m-2 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <img src={review.image} alt="Doctor" className="w-48 h-48 object-cover rounded-t-lg mx-auto" />
              <div className="text-center">
                <p className="text-gray-800 text-lg mt-4">{review.text}</p>
                <p className="text-gray-500 text-md mt-2">{review.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

  </div>
  
  </div>

    
  );
};


export default Reviews;
