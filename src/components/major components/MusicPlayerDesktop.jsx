import React, { useState } from "react";

import {
  Avatar,
  Box,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";

import testImage from "../images/image-product-1-thumbnail.jpg";

export default function MusicPlayerDesktop() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress] = useState(30);

  const [loopIcon, setLoopIcon] = useState(0);
  const handleLoopIcon = () => {
    if (loopIcon === 2) {
      setLoopIcon(0);
    } else {
      setLoopIcon((prev) => prev + 1);
    }
  };

  const handleIsPlaying = ()=>{
    setIsPlaying(!isPlaying)
  }

  return (
    <Grid
      container
      pt={2}
      pb={1}
      sx={{
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        backgroundColor: "primary.main",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Grid item sm={4} sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ position: "absolute", top: 0, width: "100%", color: "blue" }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              backgroundColor: "secondary.main",
              "& .MuiLinearProgress-bar": { backgroundColor: "action.active" },
            }}
          />
        </Box>
        <Box pl={2}>
          <Avatar variant="rounded" src={testImage} />
        </Box>
        <Box ml={2}>
          <Typography variant="subtitle1">Before you wake up</Typography>
          <Typography variant="subtitle2" sx={{ color: "#868686" }}>
            Adekunle Gold
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "60%",
          }}
        >
          <SkipPreviousIcon />
          <Avatar
            sx={{ backgroundColor: "action.active", color: "primary.main" }}
            onClick={handleIsPlaying}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </Avatar>
          <SkipNextIcon />
        </Box>
      </Grid>
      <Grid item sm={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "60%",
            alignItems: "center",
          }}
          onClick={handleLoopIcon}
        >
          {loopIcon === 0 && (
            <IconButton>
              <RepeatIcon />
            </IconButton>
          )}
          {loopIcon === 1 && (
            <IconButton>
              <RepeatOneIcon />
            </IconButton>
          )}
          {loopIcon === 2 && (
            <IconButton>
              <ShuffleIcon />
            </IconButton>
          )}

          <AddBoxOutlinedIcon />
          <QueueMusicOutlinedIcon />
        </Box>
      </Grid>
    </Grid>
  );
}
