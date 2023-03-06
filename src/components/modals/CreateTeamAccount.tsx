import React from 'react'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { FormControl } from '@mui/material'
import styles_Home from '@/styles/Home.module.css'
import styles from './createAccount.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

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

const CreateTeamAccount = ({ nextStage }: any) => {
  const [checkedList, setCheckedList] = useState('')
  const [checkedList2, setCheckedList2] = useState('')

  const handleCheck = (e: any) => {
    setCheckedList(e.target.value)
  }
  const handleCheck2 = (e: any) => {
    setCheckedList2(e.target.value)
  }

  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{ textAlign: 'center', textDecoration: 'underline' }}
      >
        Create Team Account
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} className="form">
        <label className="input_label">
          <p className="form_text"> Team Name:</p>
          <input type="text" name="team_name" className="form_input" />
        </label>
        <label className="input_label" style={{ display: 'flex' }}>
          <p className="form_text">Description:</p>
          <textarea
            name="description"
            rows={4}
            cols={50}
            className="form_input"
          />
        </label>
        <div className="form_level_1">
          <label htmlFor="cars" className="form_lable">
            <p className="form_text">Who can join?</p>
            <div>
              <div>
                <input
                  type="radio"
                  id="joinChoice"
                  name="join"
                  value="email"
                  checked={true}
                />
                <label htmlFor="contactChoice1" className="form_text">
                  Anyone with the link
                </label>
              </div>
              <div>
                <input type="radio" id="joinChoice" name="join" value="email" />
                <label htmlFor="contactChoice2" className="form_text">
                  Add public key
                </label>
              </div>
            </div>
          </label>
          <label htmlFor="cars" className="form_lable">
            <p className="form_text">Joining fee</p>
            <div>
              <div>
                <input type="radio" id="joinFees" name="joinFees" />
                <label htmlFor="contactChoice1" className="form_text">
                  Free
                </label>
              </div>
              <div>
                <input type="radio" id="joinfees" name="joinfees" />
                <label htmlFor="contactChoice2" className="form_text">
                  <div
                    style={{
                      flex: '1',
                      border: '1px solid white',
                      borderRadius: '0.3rem',
                      padding: '0.2rem 0.3rem',
                      background: '#2F343F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <select
                      name="invitelink"
                      id="invitelink"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        borderRight: 'none',
                      }}
                    >
                      <option value="single">
                        <FontAwesomeIcon icon={faInfinity} />
                      </option>
                    </select>
                    |
                    <p
                      style={{
                        width: '75%',
                        paddingLeft: '0.5rem',
                        margin: '0',
                      }}
                    >
                      0.02548
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </label>
        </div>
        <div className="form_level_2">
          <label htmlFor="cars" className="form_lable">
            <p className="form_text">Who pays gas?</p>
            <div>
              <div>
                <input type="radio" id="payGas" name="payGas" checked={true} />
                <label htmlFor="contactChoice1" className="form_text">
                  Never pay gas fee
                </label>
                <span className="form_premium" style={{ marginTop: '8px' }}>
                  {' '}
                  Buy Premium
                </span>
              </div>
              <div>
                <input type="radio" id="payGas" name="payGas" />
                <label htmlFor="contactChoice2" className="form_text">
                  Team Account{' '}
                </label>
              </div>
            </div>
          </label>
          <label htmlFor="cars" className="form_lable">
            <p className="form_text">Proposal fee</p>
            <div>
              <div>
                <input type="radio" id="propFees" name="propFees" />
                <label htmlFor="contactChoice1" className="form_text">
                  Free
                </label>
              </div>
              <div>
                <input type="radio" id="propFees" name="propFees" />
                <label htmlFor="contactChoice2" className="form_text">
                  <div
                    style={{
                      flex: '1',
                      border: '1px solid white',
                      borderRadius: '0.3rem',
                      padding: '0.2rem 0.3rem',
                      background: '#2F343F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <select
                      name="invitelink"
                      id="invitelink"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        borderRight: 'none',
                      }}
                    >
                      <option value="single">
                        <FontAwesomeIcon icon={faInfinity} />
                      </option>
                    </select>
                    |
                    <p
                      style={{
                        width: '75%',
                        paddingLeft: '0.5rem',
                        margin: '0',
                      }}
                    >
                      0.02548
                    </p>
                  </div>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="innerfees"
                        name="innerfees"
                        style={{
                          accentColor: '#1283FB',
                          backgroundColor: '#191B1F',
                        }}
                      />
                      <label htmlFor="contactChoice1" className="form_text">
                        Team account
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="innerfees"
                        name="innerfees"
                        style={{
                          accentColor: '#1283FB',
                          backgroundColor: '#191B1F',
                        }}
                      />
                      <label htmlFor="contactChoice2" className="form_text">
                        Initiator
                      </label>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </label>
        </div>
        <div className="percent form_text">
          Minimum approval to pass a proposal should be More than or equal to
          <input
            type="text"
            name="team_name"
            className="form_input number_form_input"
            value={100}
          />
          %
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="form_button"
        >
          Create Team
        </Button>
      </FormControl>
    </>
  )
}

export default CreateTeamAccount
