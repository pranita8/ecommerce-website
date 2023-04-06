import { useState } from "react";
//creating object with styling information and refer with style attribute. 
const slideStyles = {
  width: "100%",
  backgroundSize: "cover",
  height: "400px",
  backgroundPosition: "center",
};
const rightArrowStyles = {
  position: "absolute",
  top: "40%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};
const leftArrowStyles = {
  position: "absolute",
  top: "40%",
  transform: "translate(0, -50%)",
  left: "30px",
  fontSize: "50px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};
const sliderStyles = {
  position: "relative",
  height: "100%",
};
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};
const dotStyle = {
  margin: "0 4px",
  cursor: "pointer",
  fontSize: "20px",
};

const Slider=({slides}) => {


  // usestate create
  const [currIndex, setCurrIndex] = useState(0);

  //previous slide
  const previous = () => {
    const FirstSlide =  currIndex===0;

  //if it is  firstslide and try to back again the it will provide lenth -1 index (last image index)
  //else it will provide current index -1
    const newIndex = FirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  //next slide image
  const next= () => {
    const LastSlide = currIndex === slides.length - 1;
    //if it is lastslide and try to next again the it will provide 0 index (first image index)
    //else it will provide current index+1
    const newIndex = LastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  //calling function
  const goToSlide = (slideIndex) => {
    setCurrIndex(slideIndex);
  };
  
  //calling image using index through props
  const slideStylesWidthBackground = {
    ...slideStyles,
    // set background image
    backgroundImage: `url(${slides[currIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={previous} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={next} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>

      <div style={dotsContainerStyles}>
        {/* mapping of array */}

        {slides.map((slide, Index) => (
          <div
          key={Index}
            style={dotStyle}
            onClick={() => goToSlide(Index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;


