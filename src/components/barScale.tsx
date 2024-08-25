export function BarScale({ skillName, value }: {skillName: string, value: number}) {
  let fill = value * 10;

  return(
    <div className="flex mt-1.5 mb-1.5">
      <p className="mr-auto">{skillName}</p>
      <div id="bar-scale-background" className="ml-3 w-52">
        <div id="bar-scale-fill" style={{ width: `${fill}%`, height: '100%'}}></div>
      </div>
    </div>
  );
}