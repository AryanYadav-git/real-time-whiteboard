import { Card, Typography, TextField, Divider, Button } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

function JoinRoomForm() {
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
              Join Room
            </Typography>
          </div>
          <div className="inputs">
            <TextField className="input" label="Name" size="small" fullWidth />
            <TextField className="input" label="Room Code" placeholder="Enter Room Code" size="small" fullWidth/>
 
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
              <PlayArrowRoundedIcon sx={{lineHeight:0}}/> Join Session
            </Button>
          </div>
        </Card>
  )
}

export default JoinRoomForm