import { BatteryFullIcon, BoxIcon, CompassIcon, WeightIcon } from "lucide-react";

export default function ItemDescriptions() {
  const items = [
    {
      icon: <CompassIcon size={48} />,
      title: "Engineered for",
      value: "Indoor & outdoor use",
    },
    {
      icon: <BoxIcon size={48} />,
      title: "Item Dimensions",
      value: "10.5 x 5.5 x 2.5 cm",
    },
    {
      icon: <WeightIcon size={48} />,
      title: "Weight",
      value: "Approx. 263g",
    },
    {
      icon: <BatteryFullIcon size={48} />,
      title: "Battery Life",
      value: "Lasts up to 4-6 hours",
    },
  ];

  return (
    <div className="bg-slate-200 rounded-md flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-300 mt-6">
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
