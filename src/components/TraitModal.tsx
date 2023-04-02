import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import styles from "../styles/traitModal.module.scss";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface TraitModalProps {
  title: string;
  content: string;
  color: string;
  font?: string;
}

const TraitModal = ({ title, content, color, font }: TraitModalProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<h1 style={{ fontSize: "2.5rem" }}>{title}</h1>}
        styles={{
          header: {
            height: "5rem",
            backgroundColor: "rgb(39, 51, 75)",
            color: "white",
          },
          content: {
            backgroundColor: "rgb(39, 51, 75)",
            color: "white",
            fontSize: "1.3rem",
          },
          close: {
            width: "2.5rem",
            svg: {
              width: "3rem",
              height: "3rem",
            },
          },
        }}
        centered
      >
        {content}
      </Modal>

      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          color="primary"
          className={`${styles.traitButton} hiddenLeft`}
          onClick={() => {
            open();
          }}
          sx={{ font: font, textTransform: "unset" }}
        >
          {title}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default TraitModal;
