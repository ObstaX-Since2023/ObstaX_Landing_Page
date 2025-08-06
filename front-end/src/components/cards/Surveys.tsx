const surveyData: SurveyCardProps[] = [
  {
    percentage: "95%",
    title: "Feels confident while using our prototype",
    description: "Lorem ipsum dolor sit amet, conse",
  },
  {
    percentage: "90%",
    title: "Would recommend ObstaX to others",
    description: "Lorem ipsum dolor sit amet, conse",
  },
];

type SurveyCardProps = {
  percentage: string;
  title: string;
  description: string;
};

export default function Surveys() {
  return (
    <div className="flex flex-wrap mt-6">
      {surveyData.map((item, idx) => (
        <div
          key={idx}
          className={`w-full sm:w-1/2 ${idx === 0 ? 'pb-4 sm:pr-4 sm:pb-0' : ''}`} // padding between cards
        >
          <div className="flex rounded shadow bg-white">
            {/* Left Percentage Box */}
            <div className="bg-slate-200 flex items-center justify-center px-6 py-8">
              <span className="text-3xl font-bold">{item.percentage}</span>
            </div>

            {/* Right Text */}
            <div className="px-6 py-4">
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

}