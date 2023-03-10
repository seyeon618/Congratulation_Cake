import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import { UploadButtonWrap, StyledInput, StyledLabel, UploadImageWrap, Question } from "./styles";
import { useRef } from "react";
import { useState } from "react";
import { baseUrl } from "@/constant/api";
import axios from "axios";

import Image from "next/image";
import UploadImg from "@/asset/images/UploadImage.png";
import QuestionImg from "@/asset/images/Question.png";

import previewImage from "@/asset/images/upload_preview.png";

interface Props {
  preAction?: any;
  nextAction?: any;
  setState: any;
}

function ImageForm({ preAction, nextAction, setState }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<any>();

  const handleFileUpload = (e: any) => {
    const url = `${baseUrl}/message/remove-background/`;
    const uploadedFile = e.target.files[0];
    const maxFileSize: number = 2 * 1024 * 1024;
    const uploadedFileSize = uploadedFile?.size;

    // Validate uploaded file size (Max 5MB)
    if (maxFileSize < uploadedFileSize) {
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res: ", res);
        // const blobURL = URL.createObjectURL(res.data);
        setSelectedImage(previewImage);
        setState(res.data);
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };

  const UploadImage = (() => {
    return selectedImage == null ? (
      <Image src={UploadImg} alt={"upload-image"} width={196} height={196} />
    ) : (
      <Image src={selectedImage} alt={"image"} width={170} height={250} />
    );
  })();

  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <UploadImageWrap>
          <>{UploadImage}</>
        </UploadImageWrap>
        <Question>
          <Image src={QuestionImg} alt={"question"} />
          <StyledLabel>{"???????????? ?????? ?????? \n ?????? ???????????? ???????????? ??????????????????"}</StyledLabel>
        </Question>
        <StyledInput ref={inputRef} type="file" accept="image/*" onChange={handleFileUpload} />
        <UploadButtonWrap>
          <Button
            label="Image Upload"
            Action={() => {
              if (inputRef.current) {
                inputRef.current.click();
              }
            }}
          />
          <Button label="Next" Action={nextAction} />
        </UploadButtonWrap>
      </Card>
    </CommonBackground>
  );
}

export default ImageForm;
