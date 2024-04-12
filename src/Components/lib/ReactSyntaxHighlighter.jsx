import { Box, Grid, Icon, IconButton, Stack } from "nms-creative-ui";
import { useSnackbar } from "notistack";
import CopyToClipboard from "react-copy-to-clipboard";
import { PrismLight } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as SolarIconSet from "solar-icon-set";

const CodeBlock = ({ code, language }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleCopyToClipboard = () => {
    enqueueSnackbar("Copied to Clipboard!", {
      variant: "info",
      autoHideDuration: 3000,
      action: (key) => (
        <IconButton
          color="info"
          size="medium"
          aria-label="close"
          severity="info"
          onClick={() => closeSnackbar(key)}
        >
          <SolarIconSet.CloseCircle fontSize={24} />
        </IconButton>
      ),
      icon: (
        <Icon color="success">
          <SolarIconSet.InfoSquare size={24} iconStyle="BoldDuotone" />
        </Icon>
      ),
      style: {
        backgroundColor: "#CBFEFA",
        color: "#0090CB",
      },
    });
  };

  return (
    <Grid container>
      <Box
        style={{
          padding: "24px",
          borderRadius: "16px",
          backgroundColor: "#011627",
          overflow: "auto",
          width:"100%",
          maxHeight: "70vh",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"start"
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <PrismLight style={nightOwl} language={language} showLineNumbers wrapLongLines="pre-wrap">
            {code}
          </PrismLight>
          <CopyToClipboard text={code} onCopy={handleCopyToClipboard}>
            <IconButton color="neutral">
              <SolarIconSet.Copy size={24} iconStyle="BoldDuotone" />
            </IconButton>
          </CopyToClipboard>
        </Stack>
      </Box>
    </Grid>
  );
};

export default CodeBlock;
