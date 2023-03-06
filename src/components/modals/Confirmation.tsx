import React from 'react'
import { Box, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { FormControl } from '@mui/material'
import styles_Home from '@/styles/Home.module.css'
import styles from './createAccount.module.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#1A1C20',
  border: '1px solid #ffffff',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
}

const Confirmation = (props: any) => {
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{ textAlign: 'center', textDecoration: 'underline' }}
      >
        Are you sure you want to make these changes?
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} className="form">
        <div className="percent form_text">
          This will require approval from each team team member.
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="form_button"
          onClick={props.close}
        >
          confirm
        </Button>
      </FormControl>
    </>
  )
}

export default Confirmation
