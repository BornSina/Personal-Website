import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import styles from "../styles/traitModal.module.scss";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

interface TraitModalProps {
  title: string;
  color: string;
  content: string[];
  skills: string[];
  font?: string;
}

const TraitModal = ({
  title,
  color,
  content,
  skills,
  font,
}: TraitModalProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  // Create a MUI theme for custom button color
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
        title={
          <div style={{ fontSize: "2.5rem", fontWeight: "600" }}>{title}</div>
        }
        size={"xl"}
        styles={{
          content: {
            backgroundColor: "rgb(39, 51, 75)",
            color: "white",
            fontSize: "1.3rem",
            height: "65rem",
            paddingTop: ".5rem",
          },
          header: {
            height: "5rem",
            backgroundColor: "rgb(39, 51, 75)",
            color: "white",
            marginBottom: ".75rem",
            zIndex: 2,
          },
          close: {
            width: "2.5rem",
            svg: {
              width: "3rem",
              height: "3rem",
              color: "white",
              transition: "color 0s ease-in-out !important",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:active": {
              backgroundColor: "transparent",
              svg: {
                color: "grey",
              },
            },
          },
        }}
        centered
      >
        <div className={styles.imageContainer}>
          <Image src={`/assets/images/traits/${title}.webp`} alt={title} fill />
        </div>
        <div className={styles.contentContainer}>
          {content.map((sentence, i) => {
            return (
              <div
                key={i}
                style={{ marginBottom: "2rem", lineHeight: "2.5rem" }}
              >
                {sentence}
              </div>
            );
          })}
          <ul>
            {skills.map((benefit, i) => {
              return (
                <li key={i} style={{ margin: "0rem 0rem 1.5rem 2rem" }}>
                  {benefit}
                </li>
              );
            })}
          </ul>
        </div>
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
