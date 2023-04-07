import { Grid,Container } from '@mui/material';

function Products()
{
    return(
        <Container sx={{marginY:12}} style={{backgroundColor:"#c7bebd",color:'black'}}>
        <Grid container spacing={5} textAlign='center' >
            <Grid item sm={6} md={4} lg={3} > 
            <img class="img-thumbnail" src="https://rb.gy/ezgw" alt=""></img>
            <h6>Pulsar 150</h6>
            <p>Price : ₹1,16,781</p>
            </Grid>
            <Grid item sm={6} md={4} lg={3} >
            <img class="img-thumbnail" src="https://rb.gy/5f1a" alt=""></img>
            <h6>Pulsar RS200</h6>
            <p>Price : ₹1,71,213</p>
            </Grid>
            <Grid item sm={6} md={4} lg={3} >
            <img class="img-thumbnail" src="https://rb.gy/crs5" alt=""></img>
            <h6>Pulsar N160</h6>
            <p>Price : ₹1,29,773</p>
            </Grid>
            <Grid item sm={6} md={4} lg={3} >
            <img class="img-thumbnail" src="https://rb.gy/kl1p" alt=""></img>
            <h6>Pulsar NS200</h6>
            <p>Price : ₹1,47,859</p>
            </Grid>
        </Grid>
        </Container>
    );
}

export default Products;