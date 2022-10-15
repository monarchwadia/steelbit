import Steelbit from "steelbit";
import sampleData from "steelbit/data/sample-data";

const data = document.getElementById("out");
if (data) {
  const sb = new Steelbit(data, sampleData);
  sb.render();
}