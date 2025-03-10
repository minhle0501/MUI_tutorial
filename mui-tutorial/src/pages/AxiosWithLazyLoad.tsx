import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

// Định nghĩa kiểu dữ liệu Image
interface Image {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ImageListPage: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=10') // Lấy 10 hình ảnh
      .then((res) => {
        console.log('Image Data:', res.data);
        setImages(res.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h1" component="h1">
        Image List
      </Typography>
      <Grid container spacing={3}>
        {images.length > 0 ? (
          images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={image.thumbnailUrl}
                  alt={image.title}
                />
                <CardContent>
                  <Typography variant="h6">{image.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">Loading images...</Typography>
        )}
      </Grid>
    </div>
  );
};

export default ImageListPage;

