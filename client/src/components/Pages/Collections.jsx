import * as React from 'react';
import ConnectedByBlood from "../assets/images/ConnectedByBlood/lamadre.jpeg";
import "../style/Collections.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import c1 from "../Pages/Collections/c1.jsx";
import c2 from "../Pages/Collections/c2.jsx";
import c3 from "../Pages/Collections/c3.jsx";
import c4 from "../Pages/Collections/c4.jsx";
import c5 from "../Pages/Collections/c5.jsx";
import c6 from "../Pages/Collections/c6.jsx";
import c7 from "../Pages/Collections/c7.jsx";
import c8 from "../Pages/Collections/c8.jsx";
import c9 from "../Pages/Collections/c9.jsx";
import c10 from "../Pages/Collections/c10.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
export default function ActionAreaCard() {




    return (
        <div>
       
        <div className='container'>
                <Card sx={{ maxWidth: 1000 }} >
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        imag src={ConnectedByBlood}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Connected By Blood
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
        </div>
        </div>
    );
  }