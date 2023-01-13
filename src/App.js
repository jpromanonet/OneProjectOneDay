import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Hi! I'm Juan and I'm doing a cool or simple project every single day
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            So, as I never get to finish up my portfolio section in my website, I decided to make projects everyday, like #100DaysOfCode (as the moment of writing this I'm currently on day 42), so this functions as a personal portfolio of sorts, in the about sections you will be directed to my website and in blog to my shared blog.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <a href="https://expanding-cards-pi-ivory.vercel.app/" target="_blank" >
            <Grid title="Expanding Cards" btnTitle="Demo" />
          </a>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
