import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import testImage from "../images/image-product-1-thumbnail.jpg";
import testMusic from "../music/testMusic.mp3";
export default function MusicPlayer() {
  const [displayPlay, setDisplayPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [audio] = useState(new Audio(testMusic));
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(false)

  const playMusic = () => {
    if (audioLoaded === true && displayPlay === true) {
      audio.play();
      setDisplayPlay(false);
    } else if (audioLoaded === true && displayPlay === false) {
      audio.pause();
      setDisplayPlay(true);
    }
  };

  const handleUpdateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    setProgress((currentTime / duration) * 100);
  };

  const handleAudioEnded = () => {
    setDisplayPlay(true);
    setProgress(0);
  };

  useEffect(() => {
    audio.addEventListener("timeupdate", handleUpdateProgress);
    audio.addEventListener("canplaythrough", () => setAudioLoaded(true));
    audio.addEventListener("ended", handleAudioEnded);
    audio.addEventListener("play", ()=>setNowPlaying(true))
    audio.addEventListener("pause", ()=>setNowPlaying(false))

    return () => {
      audio.removeEventListener("timeupdate", handleUpdateProgress);
      audio.removeEventListener("canplaythrough", () => setAudioLoaded(true));
      audio.removeEventListener("canplaythrough", () => setAudioLoaded(true));
      audio.removeEventListener("ended", handleAudioEnded);
      audio.removeEventListener("play", ()=>setDisplayPlay(true))
      audio.removeEventListener("pause", ()=>setDisplayPlay(false))
    };
  }, [audio]);

  useEffect(()=>{
    if(nowPlaying){
        audio.play()
        setDisplayPlay(false)
    }
    else{
        audio.pause()
        setDisplayPlay(true)
    }
  }, [audio, nowPlaying])
  return (
    <Box
      sx={{
        position: "fixed",
        display: { xs: "flex", sm: "none" },
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
      <Avatar src={testImage} sx={{ marginLeft: 1 }} />
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
        {displayPlay ? (
          <PlayArrowIcon onClick={playMusic} />
        ) : (
          <PauseIcon onClick={playMusic} />
        )}
      </Avatar>
    </Box>
  );
}
