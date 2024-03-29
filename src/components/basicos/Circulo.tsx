interface CirculoProps {
  texto: string;
}

export default function Circulo(props: CirculoProps) {
  return (
    <div
      className={`
            flex justify-center items-center
            h-64 w-64 bg-cyan-500 rounded-full
            text-black font-black text-3xl
        `}
    >
      {props.texto}
    </div>
  );
}
