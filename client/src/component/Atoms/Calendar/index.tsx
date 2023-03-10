import { CalenderWrap } from "./styles";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Label from "@/component/Atoms/Label";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

interface Props {
  onClose: () => void;
  setState: any;
}

function Calender({ onClose, setState }: Props) {
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const handleChange = (newDate: Dayjs | null) => {
    setDate(newDate);
    setState(newDate?.format("YYYY-MM-DD"));
  };

  return (
    <div>
      <Label text={"which day do you want to celebrate?"} />
      <CalenderWrap>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat={"YYYY-MM-DD"}
              value={date}
              onChange={handleChange}
              onClose={onClose}
              renderInput={(params) => <TextField {...params} />}
            />
            {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
          </Stack>
        </LocalizationProvider>
      </CalenderWrap>
    </div>
  );
  // return <Clock format={"YYYY-MM-DD"} ticking={false} timezone={"Asia/Seoul"} />;
}

export default Calender;
