const {
    colors,DialogContent,DialogContentText,DialogTitle,
    CssBaseline,Grid,Dialog,DialogActions,
    ThemeProvider,
    Typography,Button,
    Container,
    makeStyles,Paper,
    createMuiTheme,
    Box,
    SvgIcon,ListItemText,List,ListItem,Divider,AppBar,Toolbar,IconButton,CloseIcon,Slide,
    Link,ExpansionPanel,ExpandMoreIcon,ExpansionPanelDetails,ExpansionPanelSummary,
  } = MaterialUI;
  
  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: colors.red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
 

function App(props) {
    return (
      <Container fixed>
        <ProjectList />
        <br />
        <br />
        <Schedule />
        <br />
        <Divider />
        <br />
        <HandsOn />
      </Container>
    );
  }

function ProjectList(props) {
    return(
      <Container fixed>
          <Typography align="center" component="h4">รายชื่อโครงงานที่ผ่านเข้ารอบ</Typography>
          <br />
          <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography component="h6" align="center">โครงงานสะเต็มศึกษา</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img src='../img/present/รายชื่อโครงงาน-01.png' alt="Logo" />
          </ExpansionPanelDetails>
          </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary> 
            <Typography component="h6" align="center">โครงงานสวนพฤกษศาสตร์</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img src='../img/present/รายชื่อโครงงาน-03.png' alt="BotanicalGarden" />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography component="h6" align="center">โครงงานเศรษฐกิจพอเพียง</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img src='../img/present/รายชื่อโครงงาน-05.png' alt="EcnomicPhilosophy" />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
      
    );
    
}

function Sponsors() {
  return(
    <Container fixed>
      <Typography component="h4" align="center">ผู้สนับสนุน</Typography>
      <br />
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={6} md={4}><img src="../img/sponsors/spvi.png" /></Grid>
        <Grid item xs={6} md={4}><img src="../img/sponsors/true.jpg" /></Grid>
        <Grid item xs={6} md={4}><img src="../img/sponsors/ELWE3.jfif" /></Grid>
        <Grid item xs={6} md={4}><img src="../img/sponsors/ptt.png" /></Grid>
        <Grid item xs={6} md={4}><img src="../img/sponsors/mbot.png" /></Grid>

      </Grid>
    </Container>
  )
}

function HandsOn() {
  return(
    <Container fixed>
      <Typography component="h4" align="center">กิจกรรม Hands On</Typography>
      <img src="../img/HandsON.jpg" alt="Hands On" />
    </Container>
  );
}

function Schedule() {
  return(
    <Container fixed>
      <Grid container spacing={2} justify="center" alignItems="center"><a href="../img/schedule/schedule.pdf" align="center" target="_blank"><Button align="center" variant="contained" color="primary"><Typography align="center" component="h6">ดาวน์โหลดกำหนดการ</Typography></Button></a></Grid>

    </Container>
  )
}

function Improve() {
  return(
    <Container fixed>
      <Typography align="center" component="h3" color="primary">แบบประเมินความพึงพอใจ</Typography>
      <br />
      <Grid container spacing={2} justify="center" alignItems="center"><a href="https://forms.gle/7ZaYQCvBjZ3hTofX8" target="_blank"><img src="../img/sponsors/frame.png" align="center"/></a></Grid>
    </Container>
  );
}


  
ReactDOM.render(<App />,document.querySelector('.page2'));

ReactDOM.render(<Sponsors />,document.querySelector('.page3'));

ReactDOM.render(<Improve />,document.querySelector('.page4'));

