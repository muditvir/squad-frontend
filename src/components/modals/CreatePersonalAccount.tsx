import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import styles_Home from "@/styles/Home.module.css";
import styles from "./createAccount.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#1A1C20",
  border: "1px solid #ffffff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const CreatePersonalAccount = ({ nextStage }: any) => {
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{
          textAlign: "center",
          textDecoration: "underline",
          marginBottom: "1rem",
        }}
      >
        Create Personal Account
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} className="form">
        <label className="input_label">
          <p className="form_text"> Team Name:</p>
          <input type="text" name="team_name" className="form_input" />
        </label>
        <label className="input_label">
          <p className="form_text">Description:</p>
          <textarea
            name="description"
            rows={4}
            cols={50}
            className="form_input"
          />
        </label>
        <label
          className="input_label"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className="form_text"> Link Account:</p>
          <div className="form_link_copy">
            <p className="form_text">
              {" "}
              Add your external account public keys separated by commas.
            </p>
            <input
              type="text"
              name="team_name"
              className="form_input"
              style={{ width: "92%", marginBottom: "15px" }}
            />
            <input
              type="text"
              name="link"
              className="form_input"
              value={"this is a Random link"}
              style={{ width: "92%", marginBottom: "15px" }}
            />
          </div>
        </label>
        <div className="form_level_2">
          <label htmlFor="cars" className="form_lable">
            <p className="form_text">Who pays gas?</p>
            <div>
              <div>
                <input type="radio" id="payGas" name="payGas" checked={true} />
                <label htmlFor="contactChoice1" className="form_text">
                  Never pay gas fee
                </label>
                <span className="form_premium"> Buy Premium</span>
              </div>
              <div>
                <input type="radio" id="payGas" name="payGas" />
                <label htmlFor="contactChoice2" className="form_text">
                  Team Account{" "}
                </label>
              </div>
            </div>
          </label>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="form_button"
        >
          Create Account
        </Button>
      </FormControl>
    </>
  );
};

export default CreatePersonalAccount;
