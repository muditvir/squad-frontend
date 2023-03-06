import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import styles_Home from "@/styles/Home.module.css";
import styles from "./createAccount.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
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

const GenerateLink = () => {
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
        Generate Invite Link
      </Typography>
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2 }}
        variant="h5"
        component="h1"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Great 🚀, your team account has been created. Share the link to invite
        members.
      </Typography>
      <FormControl fullWidth sx={{ m: 1 }} className="form">
        <div className="add_multi_pub">
          <p>Add multiple public keys seperated by commas</p>
          <input type="text" name="add_mult_pub_key" className="form_input" />
        </div>
        <div className="collect_form_copy">
          <Select
            value={1}
            label="Age"
            style={{
              color: "white",
              padding: " 10px 20px !important",
              borderRight: "2px solid white",
            }}
          >
            <MenuItem value={1}>Single Use</MenuItem>
            <MenuItem value={2}>Multi Use</MenuItem>
          </Select>
          <p
            style={{
              margin: "auto 20px",
              width: "70%",
              color: "#9b00ff",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            this is a link link link
          </p>
          <FontAwesomeIcon
            icon={faCopy}
            style={{
              fontSize: 18,
              color: "white",
              fill: "none",
              fillOpacity: "1",
            }}
          />
          <FontAwesomeIcon
            icon={faRefresh}
            style={{
              fontSize: 18,
              color: "white",
              fill: "none",
              fillOpacity: "1",
            }}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="form_button"
        >
          Done
        </Button>
      </FormControl>
    </>
  );
};

export default GenerateLink;
