import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
  return (
    <div className="flex justify-around items-center h-screen">
      <Circulo texto="Circ #1" />
      <Circulo texto="Circ #1" />
      <Circulo texto="Circ #1" />
    </div>
  );
}
