import { ArrowDownAZIcon, JapaneseYen, RussianRuble, SignalZero, Weight } from "lucide-react";

export default function ItemDescriptions() {
  const items = [
    {
      icon: <RussianRuble size={48} />,
      title: "Engineered for",
      value: "Road running",
    },
    {
      icon: <ArrowDownAZIcon size={48} />,
      title: "Size",
      value: "Maximum",
    },
    {
      icon: <Weight size={48} />,
      title: "Shoe weight",
      value: "Approx. 263g\n(women's size 5.5)",
    },
    {
      icon: <JapaneseYen size={48} />,
      title: "Heel-to-toe drop",
      value: "10mm",
    },
  ];

  return (
    <div className="bg-slate-200 rounded-md flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-400 mt-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex-1 p-6 text-center">
          <div className="justify-self-center">{item.icon}</div>
          <p className="text-base font-normal sm:mt-4">{item.title}</p>
          <p className="text-lg font-semibold mt-1">{item.value}</p>
        </div>
      ))
      }
    </div >
  );
}
