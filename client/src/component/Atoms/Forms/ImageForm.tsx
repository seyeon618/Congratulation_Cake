import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import { StyledInput } from "./styles";
import { useRef } from "react";
import { useState } from "react";
import { baseUrl } from "@/constant/api";
import axios from "axios";

interface Props {
  preAction?: any;
  nextAction?: any;
}

function ImageForm({ preAction, nextAction }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleFileUpload = (e: any) => {
    const url = `${baseUrl}/message/remove-background/`;
    const reader = new FileReader();
    const uploadedFile = e.target.files[0];
    const maxFileSize: number = 2 * 1024 * 1024;
    const uploadedFileSize = uploadedFile?.size;

    //Validate uploaded file size (Max 5MB)
    if (maxFileSize < uploadedFileSize) {
      return;
    }

    // Execute file upload process
    reader.onload = () => {
      const formData = new FormData();
      formData.append("file", uploadedFile);

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });
    };

    // setSelectedFile(uploadedFile);
  };
  // res 성공 Action
  // nextAction();

  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>Image 업로드 하세요</div>

        <StyledInput ref={inputRef} type="file" accept="image/*" onChange={handleFileUpload} />
        <Button
          label="Image Upload"
          Action={() => {
            if (inputRef.current) {
              inputRef.current.click();
            }
          }}
        />
      </Card>
    </CommonBackground>
  );
}

export default ImageForm;
