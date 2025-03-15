import { useEffect } from "react";
import { Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useProductStore } from "../../store/useProductStore";

const ProductList: React.FC = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container sx={{ textAlign: "center", marginTop: 5 }}>
      <Typography variant="h3" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id}>
            <Card sx={{ maxWidth: 250, padding: 2 }}>
              <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ minHeight: 60, fontWeight: "bold" }}>
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
