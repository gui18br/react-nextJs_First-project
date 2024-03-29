interface TabelaSerieAProps {
  times: string[];
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
  // const itens: any[] = [];
  // for (let i = 0; i < props.times.length; i++) {
  //   itens.push(
  //     <li key={props.times[i]} className={`text-xl list-decimal `}>
  //       {props.times[i]}
  //     </li>
  //   );
  // }

  const itens2 = props.times.map((time, i) => {
    return (
      <li
        key={time}
        className={`text-xl list-decimal ${
          i % 2 === 0 ? "text-blue-200" : "text-yellow-300"
        }`}
      >
        {time}
      </li>
    );
  });
  return <ol>{itens2}</ol>;
}
