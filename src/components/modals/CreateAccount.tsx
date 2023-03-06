import React from "react";
import { Box, Typography } from "@mui/material";
import styles_Home from "../../styles/Home.module.css";
import styles from "@/styles/Dashboard.module.css";

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

const CreateAccount = ({ nextStage }: any) => {
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{ marginBottom: "8 style={{textAlign:'center'}}0px" }}
      >
        Create Account
      </Typography>
      <div className={styles.account_type} style={{ marginTop: "50px" }}>
        <div
          className="box2"
          style={{
            cursor: "pointer",
            width: "300px",
            height: "200px",
            marginRight: "40px",
          }}
          onClick={() => nextStage("1a")}
        >
          <h1
            className={styles_Home.box2Heading}
            style={{ textAlign: "center" }}
          >
            Personal
          </h1>
          <ul>
            <li>Never lose your assets.</li>
            <li>Approve transactions from any device.</li>
          </ul>
        </div>
        <div
          className="box3"
          style={{ cursor: "pointer", width: "300px", height: "200px" }}
          onClick={() => nextStage("1b")}
        >
          <h1
            className={styles_Home.box2Heading}
            style={{ textAlign: "center" }}
          >
            Team
          </h1>
          <ul>
            <li>Co-own assets with your friends.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
