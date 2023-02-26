import Image from "next/image";
import { useState } from "react";
import { Circle, MessageBox, MessageWrapper, MessageContainer, ModalContainer, ModalMessage } from "./styles";
import { Modal } from "@mui/material";
import MessageBackground from "@/asset/images/message_background_small.png";

interface Props {
  messageData: { id: number; image_url: string; message: string; writer: string };
}

function Message({ messageData }: Props) {
  const { id, image_url, message, writer } = messageData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MessageContainer>
        <Circle>
          <Image src={image_url} alt={`image-${id}`} fill style={{ objectFit: "contain" }} />
        </Circle>
        <MessageBox onClick={handleOpen}>{writer}</MessageBox>
      </MessageContainer>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <ModalContainer>
          <Image src={MessageBackground} alt={"message-background-image"} />
          <MessageWrapper>
            <ModalMessage>{message}</ModalMessage>
          </MessageWrapper>
        </ModalContainer>
      </Modal>
    </>
  );
}

export default Message;
