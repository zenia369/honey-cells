import { Button, Tooltip, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    text: "Я кнопка",
    position: "translate(0vw, 0vh);",
  },
  {
    text: "Стоп, а чи знаю я що я кнопка",
    position: "translate(10vw, 10vh);",
  },
  {
    text: "Ейй, ти хочеш зробити?",
    position: "translate(10vw, -20vh);",
  },
  {
    text: null,
    position: "translate(-40vw, -40vh);",
  },
  {
    text: "...",
    position: "translate(40vw, 40vh);",
  },
  {
    text: "Щось я втомилась, посиджу тихенько",
    position: "translate(0vw, 0vh);",
  },
];

const TrickyButton = () => {
  const [userClick, setUserClick] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const curentStep = steps[userClick];

  useEffect(() => {
    if (!userClick) return;

    if (userClick === steps.length) {
      navigate("/playground/1/1", {
        state: {
          fromHome: true,
        },
      });
    }
  }, [userClick, navigate]);

  return (
    <Box mt={4} transform={curentStep?.position}>
      <Tooltip label={curentStep?.text}>
        <Button
          colorScheme="blue"
          variant={isDisabled ? "outline" : "solid"}
          onClick={() => {
            setIsDisabled(true);
            setUserClick((prev) => (prev === steps.length ? prev : prev + 1));

            setTimeout(() => {
              setIsDisabled(false);
            }, 2_000);
          }}
          isDisabled={isDisabled}
        >
          Почати
        </Button>
      </Tooltip>
    </Box>
  );
};

export default TrickyButton;
