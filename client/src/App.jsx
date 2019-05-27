import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { BrowserRouter,Route} from 'react-router-dom';
import DefaultRoute from './AccessRoute/DefaultRoute';
import {Col,Collapse} from 'react-bootstrap'
// Form,FormGroup,Button,FormControl

import Login from './components/Login/Login';
import Register from './components/Register/Register.jsx';
// import { PrivateRoute } from './components/PrivateRoute.js';
import About from './components/About/About.jsx';
import AdminPage from './components/Admin/AdminPage/AdminPage';
import AdminContestList from './components/Admin/AdminContest/AdminContestList';
import AdminUser from './components/Admin/AdminUser/ListUsers';
import Contact from './components/Contact/Contact.jsx';
import ContestView from './components/ContestView/ContestView.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import InfoUser from './components/InfoUser/InfoUser.jsx';
import ListContest from './components/ListContest/ListContest';
import VoirSoumission from './components/Jury/VoirSoumission/VoirSoumission';
import JuryListSoumission from './components/Jury/ListSoumission/ListSoumission';
import SoumissionAdmin from './components/Admin/SoumissionAdmin/SoumissionAdmin';
import ForgotPass from './components/Login/ForgotPass'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontSize: "12px",
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [connexion,setConnexion]=React.useState("Se Connecter");
  const [profil,setProfil]=React.useState("Mon profil");
  const [AdminCollapseOpen,setAdminCollapseOpen]=React.useState(false);


  // des fonction a appeler avec onLoad en utilisant des variable de session
  function handleUserConnect() {
    setConnexion(true);
  }
  function handleUserName() {
    setProfil(true);
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      <Toolbar style={{background:"darkslategray"}}>

              <IconButton 
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className="{clsx(classes.menuButton, open && classes.hide)}"
              >
                <MenuIcon />
              </IconButton>
           
            <Col xs={12} sm={6} md={6}>
              <Typography variant="h6" noWrap >
                  <label classNameName=""> 
                      <img  src="../images/logo.png" alt="NoImage" width='100' /> 
                  </label> 
                  <p width='20%' height='10' classNameName=""> World Compétition </p>
              </Typography>
            </Col>
            <Typography variant="h6" noWrap >
            <Col className="pull-right float-right hidden-xs">
              <ul className="nav navbar-nav">
              
                <li><a href="/listContest" className="navbar-a-collect" style={{color:"rgb(209, 50, 95)" }}>VOIR COMPETITION</a> </li>
                <li><a href="/adminPage" className="btn" style={{color:"green"}}>ADMIN</a> </li>
                <li><a href="/jurylistSoumission" className="btn " style={{color:"green"}}>JURY</a> </li>
                <li><a href="/login" className="btn" style={{color:"#fff"}}>SE CONNECTER</a> </li>
              </ul>

            </Col>
            </Typography>
        </Toolbar>
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} onClick={handleDrawerClose}>
          RETOUR
          <IconButton >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <a href="/infoUser" style={{textDecoration:"none",color:"black"}}> 
            <ListItem button key="infouser" >
              <ListItemIcon><i class="material-icons">perm_identity</i></ListItemIcon>
              <ListItemText primary={profil} />
            </ListItem>
          </a>
          <a href="/accueil" style={{textDecoration:"none",color:"black"}}>
            <ListItem button key="accueil" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/accueil"))}>
              <ListItemIcon><i class="material-icons">account_balance</i></ListItemIcon>
              <ListItemText primary="ACCUEIL" />
            </ListItem>
          </a>
          <a href="/about" style={{textDecoration:"none",color:"black"}}>
            <ListItem button key="about" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/about"))}>
              <ListItemIcon><i class="material-icons">vertical_split</i></ListItemIcon>
              <ListItemText primary="A PROPOS" />
            </ListItem>
          </a>
            <a href="/listContest" style={{textDecoration:"none",color:"black"}}>
              <ListItem button key="listcontest" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/listContest"))}>
              <ListItemIcon><i class="material-icons">search</i></ListItemIcon>
              <ListItemText primary="Voir Compétitions" />
              </ListItem>
            </a>
            <a href="/login" style={{textDecoration:"none",color:"black"}}>
              <ListItem button key="login" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/login"))}>
              <ListItemIcon><i class="material-icons">settings_power</i></ListItemIcon>
              <ListItemText primary={connexion} />
              {/* //se connecter tout comme voir profil seront remplaces par des variable state... */}
            </ListItem>
            </a>
            <a href="/contact"  style={{textDecoration:"none",color:"black"}}>
            <ListItem button key="contact" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/contact"))}>
              <ListItemIcon><i class="material-icons">settings_phone</i></ListItemIcon>
                  
                        <ListItemText primary="NOUS CONTACTER" />
                  
            </ListItem>
            </a>
          
        </List>
        <Divider />
        <List>
        <a href="/contact"  style={{textDecoration:"none",color:"black"}}>
              <ListItem button key="contact" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/contact"))}>
                        <ListItemIcon><i class="material-icons">done_all</i></ListItemIcon>
                        
                            <ListItemText primary="JURY" />
                        
                </ListItem>
            </a>

          <ListItem button key="jury"
            onClick={() => setAdminCollapseOpen(!AdminCollapseOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={AdminCollapseOpen}

          >
              <ListItemIcon><i class="material-icons">markunread_mailbox</i></ListItemIcon>
              <label    style={{textDecoration:"none",color:"black"}} >
                  <h6>ADMIN</h6>
              </label>
          </ListItem>
            <Collapse in={AdminCollapseOpen}>
                <div style={{paddingLeft:"2em"}} id="example-collapse-text">
                <a href="/adminPage"  style={{textDecoration:"none",color:"black"}}>
                  <ListItem button key="adminpage" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/adminPage"))}>
                            <ListItemIcon><i class="material-icons">arrow_right_alt</i></ListItemIcon>
                           
                                <ListItemText primary="Admin PAGE" />
                            
                      </ListItem>
                </a>
                <a href="/adminContest"  style={{textDecoration:"none",color:"black"}}>
                  <ListItem button key="listcontest" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/adminContest"))}>
                        <ListItemIcon><i class="material-icons">list</i></ListItemIcon>
                     
                            <ListItemText primary="Liste COMPETITIONS" />
                      
                   </ListItem>
                  </a>
                  <a href="/adminUser"  style={{textDecoration:"none",color:"black"}}>
                   <ListItem button key="adminuser" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/adminUser"))}>
                        <ListItemIcon><i class="material-icons">arrow_right_alt</i></ListItemIcon>
                            <ListItemText primary="Admin USERS" />
                   </ListItem>
                   </a>
                   <a href="/soumissionAdmin"  style={{textDecoration:"none",color:"black"}}>
                    <ListItem button key="listesoumission" onClick={()=>this.fakeAuth.signout(() =>this.props.history.push("/soumissionAdmin"))}>
                          <ListItemIcon><i class="material-icons">list</i></ListItemIcon>
                              <ListItemText primary="Liste des soumis" />
                    </ListItem>
                   </a>

                </div>
            </Collapse>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <BrowserRouter width="100%">
              <div>  
                    
                  <div className="appBody">
                      {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
                      <DefaultRoute  exact path="/" component={Home}/>
                      <DefaultRoute  exact path="/login" component={Login}/>
                      <DefaultRoute  exact path="/signup" component={Register}/>
                      <DefaultRoute  exact path="/about" component={About}/>
                      <DefaultRoute  exact path="/soumissionAdmin" component={SoumissionAdmin}/>
                      <DefaultRoute  exact path="/adminContestList" component={AdminContestList}/>
                      <DefaultRoute  exact path="/adminUser" component={AdminUser}/>
                      <DefaultRoute  exact path="/adminPage" component={AdminPage}/>
                      <DefaultRoute  exact path="/contact" component={Contact}/>
                      <DefaultRoute  exact path="/contestView" component={ContestView}/>
                      <Route  exact path="/home" component={Home}/>
                      <Route exact path="/accueil" component={Home} />
                      <Route  exact path="/infoUser" component={InfoUser}/>
                      <Route  exact path="/listContest" component={ListContest}/>
                      <Route  exact path="/juryListSoumission" component={JuryListSoumission}/>
                      <Route  exact path="/voirSoumission" component={VoirSoumission}/>
                      <Route path="/forgotpass" component={ForgotPass}/>
                  </div>
                      <Route path="/" component={Footer} />

                      
                      

                  </div>
              </BrowserRouter>
      
      </main>
       
    </div>
  );
}

export default App;