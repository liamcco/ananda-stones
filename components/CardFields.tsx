export function HelpsWith(props: { tags: string[] }) {
  const tags = props.tags;
  return (
    <div className="text-sm">
      <div className="font-bold">Hjälpområde:</div>
      <ul className="list-disc list-inside flex flex-wrap gap-x-2">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export function ChakraList(props: { chakras?: string[] }) {
  const chakras = props.chakras;
  if (!chakras) return null;

  return (
    <div className="text-sm">
      <div className="font-bold">Chakra:</div>
      <ul className="list-disc list-inside">
        {chakras && chakras.map((chakra) => <li key={chakra}>{chakra}</li>)}
      </ul>
    </div>
  );
}

export function ElementList(props: { elements?: string[] }) {
  const elements = props.elements;
  if (!elements) return null;

  return (
    <div className="text-sm">
      <div className="font-bold">Element:</div>
      <ul className="list-disc list-inside">
        {elements &&
          elements.map((element) => <li key={element}>{element}</li>)}
      </ul>
    </div>
  );
}

export function ZodiacList(props: { zodiacs?: string[] }) {
  const zodiacs = props.zodiacs;
  if (!zodiacs) return null;

  return (
    <div className="text-sm">
      <div className="font-bold">Zodiac:</div>
      <ul className="list-disc list-inside">
        {zodiacs && zodiacs.map((zodiac) => <li key={zodiac}>{zodiac}</li>)}
      </ul>
    </div>
  );
}

export function MonthList(props: { months?: string[] }) {
  const months = props.months;
  if (!months) return null;

  return (
    <div className="text-sm">
      <div className="font-bold">Month:</div>
      <ul className="list-disc list-inside">
        {months && months.map((month) => <li key={month}>{month}</li>)}
      </ul>
    </div>
  );
}
