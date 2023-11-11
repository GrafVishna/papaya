import GridElement from "../../Main/GridElement/GridElement.jsx";
import "overlayscrollbars/styles/overlayscrollbars.css";

import data from "../../../testData/testData.json";

export default function Home() {
  return (
    <div className="grid page-content tablet:grid-cols-video-items grid-cols-video-items-m gap-x-4 gap-y-10">
      {data.map((element, index) => (
        <GridElement key={index} data={element} />
      ))}
    </div>
  );
}
