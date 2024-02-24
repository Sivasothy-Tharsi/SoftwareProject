import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponentUp = (props) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fill: "#0089FF",
      }}
      d="M502.689,324.653L269.957,150.109c-8.276-6.206-19.653-6.206-27.927,0L9.311,324.653 c-10.282,7.713-12.367,22.3-4.655,32.582c4.572,6.097,11.56,9.311,18.637,9.311c4.858,0,9.759-1.517,13.945-4.656l218.758-164.072 l218.767,164.072c10.285,7.714,24.871,5.627,32.582-4.655C515.056,346.953,512.971,332.365,502.689,324.653z"
    />
  </Svg>
);
export default SVGComponentUp;
