import React from "react";
import "./Carrito.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { Grid, Typography, Avatar } from "@mui/material";

export default function Carrito() {
  return (
    <div>
      <NavBar searchBar1={false} />
      <div className="car-container">
        <div className="items-content">
          <Grid container>
            <Grid item xs={2}>
              <div className="item content-img">
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.istockphoto.com/photos/mango-picture-id165889914?k=20&m=165889914&s=612x612&w=0&h=zyRoRuQVuQg8xeDW6aj6uK9-TfpmNXlVdggmyicm-nE="
                  sx={{ width: 56, height: 56 }}
                />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="item content-des">
                <div className="tittle-item">
                  <Typography variant="subtitle1">Name</Typography>
                </div>
                <div className="des-item">
                  <Typography variant="caption">description</Typography>
                  <Typography variant="subtitle1">Price</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="item content-btn">button</div>
            </Grid>
          </Grid>
        </div>
        <div className="pay-content">pay</div>
      </div>
    </div>
  );
}
