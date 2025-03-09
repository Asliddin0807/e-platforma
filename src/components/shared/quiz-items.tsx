"use client";
import React, { useState } from "react";
import { quiz } from "@/components/Local_data/datas";
import { Box, Button, HStack, Table, Text } from "@chakra-ui/react";
import Header from "@/components/shared/HeaderText";

interface IResult {
  id: number;
  name: string;
  value: number | string;
}

const QuizComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  const resultTable: IResult[] = [
    {
      id: 1,
      name: "Overall",
      value: (result.score / 25) * 100,
    },
    {
      id: 2,
      name: "Total Questions:",
      value: questions.length,
    },
    {
      id: 3,
      name: "Total Score:",
      value: result.score,
    },
    {
      id: 4,
      name: "Correct Answers:",
      value: result.correctAnswers,
    },
    {
      id: 5,
      name: "Wrong Answers:",
      value: result.wrongAnswers,
    },
  ];

  return (
    <Box p={4}>
      <Header text={"Testlar va amaliyot"} />
      <HStack alignItems={"center"} fontSize={"2xl"}>
        <Text>
          Question: {activeQuestion + 1} / {questions.length}
        </Text>
      </HStack>
      <Box>
        {!showResult ? (
          <Box w={"100%"} borderRadius={"xl"} bg={"gray.800"} _light={{ bg: 'gray.300' }} p={3} boxShadow={'xl'}>
            <Text fontSize={"22px"}>{questions[activeQuestion].question}</Text>
            {answers.map((answer, idx) => (
              <Box
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                cursor={"pointer"}
                mt={2}
                p={2}
                borderRadius={"md"}
                bg={selectedAnswerIndex === idx ? "gray.700" : "gray.900"}
                _light={{ bg: selectedAnswerIndex === idx ? "gray.300" : "gray.400" }}
              >
                <Text fontSize={"18px"}>{answer}</Text>
              </Box>
            ))}

            <Button onClick={nextQuestion} mt={2} disabled={!checked}>
              {activeQuestion === question.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        ) : (
          <Box
            w={"100%"}
            mx={"auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={"20px"} textAlign={"center"}>
              Natijalar
            </Text>
            <Table.Root
              size="md"
              borderWidth="1px"
              w={{ base: "100%", md: "50%" }}
            >
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader fontSize={"20px"}>
                    Nomi
                  </Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="end" fontSize={"20px"}>
                    Baxo
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {resultTable.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell textAlign="end">{item.value}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
            <Button mt={2} onClick={() => window.location.reload()}>
              Restart
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default QuizComponent;
