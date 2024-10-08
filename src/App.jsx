import { Heading, Flex, Button, useToast } from "@chakra-ui/react";
import { initialTimer } from "./config";
import { useState, useEffect } from "react";
import Time from "./components/Time";
import PlayButton from "./components/PlayButton";
import formatTime, { PlayNotificationSound } from "./utils";
import ResetButton from "./components/ResetButton";

function App() {
  const [time, setTime] = useState(initialTimer[0].value); // Set the initial timer value
  const [timerStart, setTimerStart] = useState(false);

  const toast = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStart) {
        if (time > 0) {
          setTime(time - 1);
        } else if (time === 0 && timerStart) {
          PlayNotificationSound();
          toast({
            title: "Timer has stopped",
            status: "error",
            position: "top-right",
          });
          clearInterval(interval);
        }
      }
    }, 1000);

    document.title = `${formatTime(time)} - Remaining`;

    return () => clearInterval(interval);
  }, [timerStart, time, toast]); // Include toast in the dependency array

  useEffect(() => {
    if (timerStart) {
      PlayNotificationSound();
      toast({
        title: "Time has started",
        status: "success",
        position: "top-right",
      });
    }
  }, [timerStart]); // Only trigger this effect when timerStart changes

  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={6}
      bgGradient="linear(to-tl, blue.800, blue.900)"
    >
      <Heading
        color={"white"}
        fontWeight={"thin"}
        letterSpacing={"1.2px"}
        textTransform={"uppercase"}
      >
        <h1>Pomodoro timer</h1>
      </Heading>

      <Flex
        bgGradient={"linear(to-b, blue.700, blue.800)"}
        p={{ base: 6, md: 9, lg: 12 }}
        rounded={"2xl"}
        alignItems={"center"}
        flexDirection={"column"}
        shadow={"dark-lg"}
      >
        <Flex gap={{ base: 2, md: 5 }}>
          {initialTimer.map(({ value, display }) => (
            <Button
              key={value}
              colorScheme="blackAlpha"
              textTransform={"uppercase"}
              fontWeight={"light"}
              letterSpacing={"wide"}
              fontSize={{ base: "2xl", md: "medium", lg: "3xl" }}
              size={{ base: "xs", md: "md", lg: "lg" }}
              onClick={() => {
                setTimerStart(false);
                setTime(value);
              }}
            >
              {display}
            </Button>
          ))}
        </Flex>
        <Time currentTime={time} />

        <Flex alignItems={"center"} gap={2}>
          <ResetButton
            handleOnClick={() => {
              setTimerStart(false);
              setTime(initialTimer[0].value);
            }}
          />
          <PlayButton
            isStarted={timerStart}
            currentTime={time}
            handleClick={() => {
              if (!time) {
                toast({
                  title: "You need to set a timer first",
                  status: "warning",
                  position: "top-right",
                });
              } else {
                setTimerStart(!timerStart);
              }
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;

