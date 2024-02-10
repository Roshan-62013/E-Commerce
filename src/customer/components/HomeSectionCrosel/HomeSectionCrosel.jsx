import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";

const HomeSectionCrosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselInstance, setCarouselInstance] = useState(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselInstance) {
      carouselInstance.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselInstance) {
      carouselInstance.slideNext();
    }
  };

  const handleSlideChanged = (e) => {
    setActiveIndex(e.item);
  };

  const items = data.map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={handleSlideChanged}
          startIndex={activeIndex}
          ref={(el) => setCarouselInstance(el)}
        />
        {activeIndex !== items.length - 1 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCrosel;

// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// const HomeSectionCrosel = ({ sectionName, items }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const responsive = {
//     0: { items: 1 },
//     600: { items: 2 },
//     1024: { items: 3 },
//   };

//   const slideNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const slidePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="border">
//       <h2 className="text-2xl font-extrabold text-gray-800 py-5">
//         {sectionName}
//       </h2>
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           responsive={responsive}
//           disableDotsControls
//           activeIndex={activeIndex}
//         />

//         {activeIndex !== items.length - 1 && (
//           <Button
//             variant="contained"
//             className="z-50 bg-white"
//             onClick={slideNext}
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}

//         {activeIndex !== 0 && (
//           <Button
//             onClick={slidePrev}
//             variant="contained"
//             className="z-50 bg-white"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%) rotate(-90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="previous"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCrosel;
