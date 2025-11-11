import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ahoraImg from "../assets/3.webp";
import especializadosImg from "../assets/4.png";
import profeImg from "../assets/2.webp";
import maquiImg from "../assets/dialisis.jpg";
import exaImg from "../assets/exmane.webp";

function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const carouselItems = [
    {
      title: "AHORA",
      subtitle: "Conecta con profesionales",
      description:
        "podrás observar tus tratamientos, recetas y muchos más en nuestra nueva app ClinicHemo.",
      image: profeImg,
      gradient: "from-rose-50 to-[#9B9B9A]",
    },
    {
      title: "PORQUÉ",
      subtitle: "En un servicio personalizado",
      description:
        "te brindamos un espacio completo, tranquilidad ante nuestros profesionales.",
      image: ahoraImg,
      gradient: "from-amber-50 to-[#9B9B9A]",
    },
    {
      title: "ESPECIALIZADOS",
      subtitle: "Expertos en ver por tu salud",
      description: "equipos especializados en HEMODIÁLISIS y DIÁLISIS PERITONEAL .",
      image: especializadosImg,
      gradient: "from-blue-50 to-[#9B9B9A]",
    },
    {
      title: "REALIZAMOS",
      subtitle: "Exámenes especializados",
      description:
        "realizamos pruebas de toda índole con una amplia variedad de categorias",
      image: exaImg,
      gradient: "from-green-50 to-[#9B9B9A]",
    },
    {
      title: "CONTAMOS",
      subtitle: "Tecnología avanzada",
      description: "para una mejor atención y diagnóstico 100% fiable para su salud.",
      image: maquiImg,
      gradient: "from-violet-50 to-[#9B9B9A]",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl shadow-2xl p-12 relative overflow-hidden">
        <div
          className={`bg-gradient-to-br ${carouselItems[currentSlide].gradient} absolute inset-0 opacity-50`}
        ></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <div className="text-center flex-1">
              <h2 className="text-5xl font-bold text-[#20586A] mb-3">
                {carouselItems[currentSlide].title}
              </h2>
              <p className="text-2xl text-[#2E3648] font-medium mb-4">
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
                className="w-96 h-80 object-contain rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-lg text-[#2E3648] max-w-2xl mx-auto leading-relaxed">
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
                    ? "bg-slate-700 w-8"
                    : "bg-slate-400 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
