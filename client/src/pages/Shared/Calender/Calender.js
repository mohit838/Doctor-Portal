import React from "react";
// import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Container } from "@mui/material";

const Calender = ({ date, setDate }) => {
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          //   orientation="desktop"
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={date}
          //   shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Container>
  );
};

export default Calender;
