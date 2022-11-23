import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import testImage from "../images/image-product-1-thumbnail.jpg";
import testMusic from "../music/testMusic.mp3";
export default function MusicPlayer() {
  const [play, setPlay] = useState(true);
  const [progress, setProgress] = useState(0)
  const [audio, ] = useState(new Audio(testMusic));

  const handlePlay = () => {
    if (play) {
      audio.play();
      setPlay(false);
    } else if (!play) {
      audio.pause();
      setPlay(true);
    }
  };
  audio.onended = () => {
    setPlay(true);
  };

  const musicDuration = (duration, currentTime) =>{
    const percentage = (currentTime / duration) * 100
    return percentage
  }
 useEffect(()=>{
    
    if(play){
        const interval = setInterval(()=>{
            const duration = musicDuration(audio.duration, audio.currentTime)
            const progress = Math.floor(duration)
            setProgress(progress)
        }, 1000)
        return ()=>{ clearInterval(interval)}
    }

 }, [audio.duration, audio.currentTime, play])
  return (
    <Box
      
      sx={{
        position: "fixed",
        display: {xs: "flex", sm: "none"},
        alignItems: "center",
        bottom: "3.5rem",
        bgcolor: "primary.main",
        width: "100%",
        zIndex: 100,
        height: "4rem",

      }}
    >
      <Box sx={{ position: "absolute", top: 0, width: "100%", color: "blue" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            backgroundColor: "secondary.main",
            "& .MuiLinearProgress-bar": { backgroundColor: "action.active" },
          }}
        />
      </Box>
      <Avatar src={testImage} sx={{marginLeft: 1}}/>
      <Box ml={2}>
        <Typography variant="subtitle1">Before You Wake Up</Typography>
        <Typography variant="subtitle2" sx={{ color: "#868686" }}>
          Adekunle Gold
        </Typography>
      </Box>
      <Avatar
      
        sx={{
          bgcolor: "action.active",
          color: "primary.main",
          marginLeft: "auto",
          marginRight: 2,
        }}
      >
        {play ? (
          <PlayArrowIcon onClick={handlePlay} />
        ) : (
          <PauseIcon onClick={handlePlay} />
        )}
      </Avatar>
    </Box>
  );
}
