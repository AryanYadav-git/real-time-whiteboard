import { Card, Typography, TextField, Divider, Button } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import "./style.css";
function CreateRoomForm() {
  return (
    <Card
      className="card"
      // style={{ backgroundColor: ["#1d1d1d"] }}
    >
      <div className="">
        <Typography
          variant="h2"
          className="formName"
          style={{ fontSize: ["30px"] }}
        >
          Create Room
        </Typography>
      </div>
      <div className="inputs">
        <TextField className="input" label="Name" size="small" fullWidth />
        <div className="flex items-center justify-between">
          <TextField disabled hiddenLabel variant="filled" className="input" placeholder="Room Code" size="small"/>
          <Button variant="contained" sx={{ height: "95%" }}>
            Copy Link
          </Button>
        </div>
        <Divider />
        <Typography variant="body2" className="discription">
          🔒 Don't worry, the session is end-to-end encrypted, and fully
          private. Not even our server can see what you draw. Stopping the
          session will disconnect you from the room, but you'll be able to
          continue working with the scene, locally. Note that this won't affect
          other people, and they'll still be able to collaborate on their
          version.
        </Typography>

        <Button variant="outlined" color="success" className="flex flex-start" sx={{lineHeight:0}}>
          <PlayArrowRoundedIcon sx={{lineHeight:0}}/> Start Session
        </Button>
      </div>
    </Card>
  );
}

export default CreateRoomForm;
