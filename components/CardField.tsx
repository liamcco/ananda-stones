interface CardFieldProps {
  field?: string[];
  title: string;
  size?: "sm" | "lg";
}

export function CardField(props: CardFieldProps) {
  if (!props.field || !props.field.length) return null;

  const styleAddon = props.size === "lg" ? " flex flex-wrap gap-x-2" : "";
  console.log(styleAddon);

  return (
    <div className="text-sm">
      <div className="font-bold">{props.title}:</div>
      <ul className={"list-disc list-inside" + styleAddon}>
        {props.field.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
