import { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  LinearProgress,
  ImageList,
  ImageListItem,
  Stack,
  Box,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: { small: string; regular: string };
}

const UnsplashLazyImageList: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos?per_page=100", {
        headers: {
          Authorization:
            "Client-ID GHaVu5IMa1VCCxdYei4nlUWwa_Hin9Yvfj2zVEcZiQc",
        },
      })
      .then((res) => {
        console.log("Unsplash Data:", res.data);
        setImages(res.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LinearProgress sx={{ width: "50%" }} />
      </Box>
    );

  return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Unsplash Lazy Loaded Images
      </Typography>
      <Stack spacing={4} direction="row">
        <ImageList
          sx={{ width: "400px", height: "400px", overflowY: "scroll" }}
          rowHeight={164}
        >
          {images.map((image) => (
            <ImageListItem key={image.id}>
              <LazyLoadImage
                src={image.urls.small}
                alt={image.alt_description || "Unsplash Image"}
                effect="blur"
                width="100%"
                height="auto"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Box sx={{ width: 400, height: 400, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={2} gap={8}>
            {images.map((image) => (
              <ImageListItem key={image.id}>
                <LazyLoadImage
                  src={image.urls.small}
                  alt={image.alt_description || "Unsplash Image"}
                  effect="blur"
                  width="100%"
                  height="auto"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </>
  );
};

export default UnsplashLazyImageList;
