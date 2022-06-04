import React from "react";
import Header from "../../Shared/Header/Header";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Header></Header>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appoinment;
