import React from 'react';
import '../style/Collections.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import ConnectedByBlood from '../assets/images/ConnectedByBlood/lamadre.jpeg';
import EnRouge from '../assets/images/EnRouge/DiellaEnRouge.jpeg';
import Fossils from '../assets/images/Fossils/fossils.jpeg';
import Instrumentalism from '../assets/images/Instrumentalism/DOUBLEBASSPLAYER.jpeg';
import NoCollection from '../assets/images/NoCollection/la traviata.jpeg';
import Portraits from '../assets/images/Portraits/AUTOPORTRAIT.jpeg';
import TheConductorAndHisOrchestra from '../assets/images/TheConductorAndHisOrchestra/REQUIEM.jpeg';
import TheLinesOfTheBlind from '../assets/images/TheLinesOfTheBlind/AllegroConBrio.jpeg';
import TheRedBeret from '../assets/images/TheRedBeret/THEGIRLONTHERED.jpeg';
import TheVanityOfExistence from '../assets/images/TheVanityOfExistence/THEVANITYOFEXISTENCE.jpeg';
// import '../style/Collections.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import c1 from '../Pages/Collections/c1.jsx';
import c2 from '../Pages/Collections/c2.jsx';
import c3 from "../Pages/Collections/c3.jsx";
import c4 from "../Pages/Collections/c4.jsx";
import c5 from "../Pages/Collections/c5.jsx";
import c6 from "../Pages/Collections/c6.jsx";
import c7 from "../Pages/Collections/c7.jsx";
import c8 from "../Pages/Collections/c8.jsx";
import c9 from "../Pages/Collections/c9.jsx";
import c10 from "../Pages/Collections/c10.jsx";

export default function ActionAreaCard() {
  return (
    <Router>
      <div>
        <Link to="/c1">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={ConnectedByBlood}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Connected By Blood
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>

        <Link to="/c2">
          <div className='container'>
          <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={EnRouge}
                  alt='EnRouge'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  EnRouge
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>

        <Link to="/c3">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={Fossils}
                  alt='Fossils'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  Fossils
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        
        <Link to="/c4">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={Instrumentalism}
                  alt='Instrumentalism'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  Instrumentalism
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        
        <Link to="/c5">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={NoCollection}
                  alt='NoCollection'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  NoCollection
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        
        <Link to="/c6">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={Portraits}
                  alt='Portraits'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  Portraits
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        <Link to="/c6">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={ TheConductorAndHisOrchestra}
                  alt=' TheConductorAndHisOrchestra'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  TheConductorAndHisOrchestra
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        <Link to="/c6">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={TheLinesOfTheBlind}
                  alt='TheLinesOfTheBlind'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  TheLinesOfTheBlind
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        <Link to="/c6">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={TheRedBeret}
                  alt='TheRedBeret'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  TheRedBeret
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        <Link to="/c6">
          <div className='container'>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  src={TheVanityOfExistence}
                  alt='TheVanityOfExistence'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  TheVanityOfExistence
                  </Typography>
                  <Typography variant='body2' color='text.secondary'></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Link>
        <Route exact path="/c1" component={c1} />
        <Route exact path="/c2" component={c2} />
        <Route exact path="/c3" component={c3} />
        <Route exact path="/c4" component={c4} />
        <Route exact path="/c5" component={c5} />
        <Route exact path="/c6" component={c6} />
        <Route exact path="/c7" component={c7} />
        <Route exact path="/c8" component={c8} />
        <Route exact path="/c9" component={c9} />
        <Route exact path="/c10" component={c10} />
      </div>
    </Router>
  );
}
