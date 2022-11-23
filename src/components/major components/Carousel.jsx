import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";




export default function Carousel() {


  
  const [activeIndex, setActveIndex] = useState(0);
  const [difference, setDifference] = useState(0)
  const imageData = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
  ];
  

  
  const showSlide = (newIndex) => {
    if (newIndex < 0) {
      setActveIndex(0);
    } else if (newIndex > 3) {
      setActveIndex(0);
    } else {
      setActveIndex(newIndex);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(activeIndex + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  let touchStartX = 0;
  let touchEndX = 0;
const checkDirection = ()=>{
  
  touchEndX > touchStartX && Math.abs(difference)  > 30 && (showSlide(activeIndex - 1))
  touchEndX < touchStartX  && Math.abs(difference)  > 30 && (showSlide(activeIndex + 1))
  

}
  const handleTouchStart = (e)=>{
const touches = e.changedTouches[0]
touchStartX = touches.screenX
  }
const handleTouchEnd = (e)=>{
  const touches = e.changedTouches[0]
  touchEndX = touches.screenX
  setDifference((touchEndX - touchStartX))
  checkDirection()

  
}


  return (
    <Box
    mt = {1}
      sx={{
        overflow: "hidden",
        
        height: {xs: "7rem", sm: "14rem"},
        position: "relative",
        left: "50%",
        borderRadius: "8px",
        width: "95%",
        transform: "translate(-50%, 0)",
      }}
      
      
    >
      <Box
      onTouchStart={handleTouchStart}
      onTouchEnd = {handleTouchEnd}
      
        sx={{
          whiteSpace: "nowrap",
          transition: "transform .5s",
          transform: `translateX(-${activeIndex * 100}%)`,
          display: "inline-flex",
          borderRadius: "8px",
          
        }}
        
       
      >
        {imageData.map((item) => {
          return (
            <Box key={item.id} sx={{  minWidth: "100%" }}>
              <img
                src={item.image}
                alt=""
                style={{ height: "100%", width: "100%", objectFit: "cover", }}
              />
            </Box>
          );
        })}
      </Box>

      {/* <Box sx={{ position: "absolute", bottom: "0", color: "white" }}>
        <Button
          sx={{ backgroundColor: "blue", color: "white" }}
          onClick={() => {
            showSlide(activeIndex - 1);
          }}
        >
          prev
        </Button>
        <Button
          sx={{ backgroundColor: "blue", color: "white", marginLeft: "1rem" }}
          onClick={() => {
            showSlide(activeIndex + 1);
          }}
        >
          next
        </Button>
      </Box> */}

      {/*active indicators*/}
      <Box
        sx={{
          position: "absolute",
          bottom: "8px",
          display: "flex",
          justifyContent: "space-evenly",
          width: "60%",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
        
      >
        {[...Array(4)].map((item, id) => {
          return (
            <Box
              id={id}
              key={id}
              sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                border: "1px solid grey",
                backgroundColor: `${id === activeIndex? "action.active" : ""}`
              }}
            ></Box>
          );
        })}
      </Box>
    </Box>
  );
}
