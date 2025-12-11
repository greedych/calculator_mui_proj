import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Calculator() {
  const [numbers, setNumbers] = useState({
    firstNumber: null,
    secondNumber: null,
  });

  const [calculateNumber, setCalculateNumber] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumbers({ ...numbers, [name]: value });
  };

  const calculatePlus = () => {};
  return (
    <Container>
      <Box>
        <form>
          <TextField
            label="first number"
            value={numbers.firstNumber}
            onChange={handleChange}
          />
          <TextField
            label="second number"
            value={numbers.secondNumber}
            onChange={handleChange}
          />
          <Button
            onClick={(e) => console.log(e.target.value)}
            fullWidth
            variant="contained"
          >
            +
          </Button>
          <Button fullWidth variant="contained">
            -
          </Button>
          <Button fullWidth variant="contained">
            *
          </Button>
          <Button fullWidth variant="contained">
            /
          </Button>
        </form>
        <Typography></Typography>
      </Box>
    </Container>
  );
}

export default Calculator;
