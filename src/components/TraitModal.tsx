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
      <Modal opened={opened} onClose={close} title={title} centered>
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
