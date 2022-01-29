import { ReactComponent as LogoSvg } from '../../assets/Images/logo.svg';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  Header: {
    background: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'flex-start',
    height: theme.spacing(8),
  },
  Logo: {
    padding: [theme.spacing(2), theme.spacing(0), theme.spacing(2), theme.spacing(3)],
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="Header">
        <div className="Logo">
          <LogoSvg />
        </div>
      </div>
    </PatchStyles>
  );
};
