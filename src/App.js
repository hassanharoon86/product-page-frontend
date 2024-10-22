import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, Button, Container, Grid } from '@mui/material';

const App = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/product')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Product Store
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '10px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {product.name}
                </Typography>

                <Typography variant="h5" color="primary" gutterBottom>
                  ${product.price}
                </Typography>

                <Typography variant="body1" paragraph>
                  {product.description}
                </Typography>

                <Button variant="contained" color="primary" fullWidth>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
