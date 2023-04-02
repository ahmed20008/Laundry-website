import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Home from '../../Home/Home';

interface LogoutProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logout = ({ open, setOpen }: LogoutProps) => {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='px-5 py-4'>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to  log out?
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ display: 'flex', justifyContent: 'center'}}>
            <div className='pe-2'>
              <Button onClick={handleClose} variant='outlined' style={{borderColor: '#35A7FF', color: '#35A7FF', fontSize: '15px'}}>
                Cancel
              </Button>
            </div>
            <div className='ps-2'>
              <Button onClick={handleClose} variant='contained' style={{backgroundColor: '#35A7FF', color: '#fff', fontSize: '15px'}}>
                Logout
              </Button>
            </div>
          </DialogActions>
        </div>
      </Dialog>
    </div>

  );
}
export default Logout;