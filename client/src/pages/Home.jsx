import { useState } from "react";
import { Card, Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CreateRoomForm from "../components/Forms/CreateRoomForm";
import JoinRoomForm from "../components/Forms/JoinRoomForm";

function Home() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex justify-center h-full w-full pt-10 items-center">
      <Box sx={{ typography: "body1" }}>
        <TabContext value={value}>
        <TabList  onChange={handleChange} centered>
          <Tab label="Create Room" value="1"/>
          <Tab label="Join Room" value="2"/>
        </TabList>
        <TabPanel value="1"><CreateRoomForm/></TabPanel>
        <TabPanel value="2"><JoinRoomForm/></TabPanel>
        </TabContext>
      </Box>
    </div>
    // <div className="flex justify-center h-full w-full items-center">
    //     <CreateRoomForm></CreateRoomForm>
    //     <JoinRoomForm />
    // </div>
  );
}

export default Home;
