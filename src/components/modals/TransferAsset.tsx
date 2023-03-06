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

const TransferAsset = ({ nextStage }: any) => {
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{ textAlign: 'center', textDecoration: 'underline' }}
      >
        Create Proposal
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} className="form">
        <label className="input_label" style={{ display: 'flex' }}>
          <p className="form_text" style={{ width: '91px' }}>
            Transfer to:
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: ' 100%',
              marginLeft: '42px',
            }}
          >
            <p className="form_text">Add Public Key</p>
            <input type="text" name="team_name" className="form_input" />
          </div>
        </label>
        <div className="percent form_text">
          Approve transaction from any of your linked metamask account to
          execute.
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="form_button"
        >
          Send
        </Button>
      </FormControl>
    </>
  )
}

export default TransferAsset
