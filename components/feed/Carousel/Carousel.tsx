"use client";
import React, { useRef, useState } from "react";

// Definir o tipo das props do componente
interface Interest {
  id: number;
  name: string;
}

interface CarouselProps {
  interests: Interest[];
}

const Carousel: React.FC<CarouselProps> = ({ interests }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault(); // Evita o comportamento padrão de seleção de texto
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Aumenta a sensibilidade de arrasto
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full">
      {/* Container do carrossel com arrasto no eixo X */}
      <div
        ref={carouselRef}
        className="ml-4 flex gap-2 w-full items-center overflow-x-auto flex-nowrap max-w-[48rem] cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: "none" }}
      >
        {interests.map((interest) => (
          <div
            key={interest.id}
            className="flex items-center h-3 p-4 text-sm bg-white rounded-xl border-[#5001A8] border-2 whitespace-nowrap"
            // Cada item tem largura mínima de 8rem
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 rounded-full cursor-pointer"
            />
            <span className="ml-2">{interest.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
