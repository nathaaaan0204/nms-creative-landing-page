import React, { useState } from "react";
import CustomPaper from "../../../Components/Generic Components/General Components/CustomPaper";
import { Box, Button, Typography } from "nms-creative-ui";
import { Link } from "react-router-dom";

const CTA = () => {
  
  return (
      <CustomPaper >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          gap: "24px",
          
        }}
      >
        <Typography variant="h6">Want to see more?</Typography>
        <Typography variant="body1">
          Check out the docs for details of the complete library.
        </Typography>
        <Link to={"/getting-started/introduction"} underline="none">
          <Button color="primary">View Library</Button>
        </Link>
      </Box>
    </CustomPaper>
  );
};

export default CTA;
