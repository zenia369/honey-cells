import { Button, Tooltip, Box, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
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
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const curentStep = steps[userClick];
  const isLastElement = userClick === steps.length - 1;

  return (
    <Stack mt={4} transform={curentStep?.position} direction="column" gap={2}>
      <Tooltip label={curentStep?.text}>
        <Button
          colorScheme="blue"
          variant={isDisabled ? "outline" : "solid"}
          onClick={() => {
            if (isLastElement) {
              if (!value.length) return;

              if (value === import.meta.env.VITE_GAME_ONE_SECRET) {
                navigate("/playground/1/1", {
                  state: {
                    fromHome: true,
                  },
                });
              }
              return;
            }
            setIsDisabled(true);
            setUserClick((prev) => (isLastElement ? prev : prev + 1));

            setTimeout(() => {
              setIsDisabled(false);
            }, 2_000);
          }}
          isDisabled={isDisabled}
        >
          {isLastElement ? "Підтвердити" : "Почати"}
        </Button>
      </Tooltip>
      {isLastElement ? (
        <Box mt={4}>
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Секретний ключ водь туть"
            size="lg"
            color="white"
          />
        </Box>
      ) : null}
    </Stack>
  );
};

export default TrickyButton;
