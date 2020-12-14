import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  Cardmedia: {
    height: '1000%',
    width:'50%',
    paddingTop: '80.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    
    justifyContent: 'space-between',
    borderRadius: '25px',
    height: '350px',
    position: 'relative',
  },
  cardImage: {
    height: '100%',
  },
  info: {
    fontSize: '50px',
    color: 'white',
    fontFamily: 'fantasy',
    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
  },
});