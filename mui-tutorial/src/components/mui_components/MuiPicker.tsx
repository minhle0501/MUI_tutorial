import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const MuiPicker = () => {
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [selectTime, setSelectTime] = useState<Date | null>(null);
  const [selectDateTime, setSelectDateTime] = useState<Date | null>(null);

  return (
    <Stack spacing={2} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectDate}
        onChange={(newValue: Date | null) => setSelectDate(newValue)}
      />
      <TimePicker
        label="Time Picker"
        value={selectTime}
        onChange={(newValue: Date | null) => setSelectTime(newValue)}
      />
       <DateTimePicker
        label="Date Time Picker"
        value={selectDateTime}
        onChange={(newValue: Date | null) => setSelectDateTime(newValue)}
      />
    </Stack>
  );
};

export default MuiPicker;
