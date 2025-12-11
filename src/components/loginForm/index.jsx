import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography>My Login Form App</Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Typography variant="h4">Enter your data</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box mt={2}>
            <Button type="submit" fullWidth variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      {submittedData && (
        <Box mt={3}>
          <Paper elevation={10} style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>
              Submitted Data
            </Typography>
            <Typography variant="body1">Name: {submittedData.name}</Typography>
            <Typography variant="body1">
              Email: {submittedData.email}
            </Typography>
          </Paper>
        </Box>
      )}
    </Container>
  );
}

export default LoginForm;
