import React, { createContext, useReducer, useState } from "react";
import { questions } from "../data/questions";

export const QuizContext = createContext();

const initialState = {
  currentStep: 0,
  score: 0,
  questions,
  isGameStarted: false,
  isGameOver: false,
  shuffledQuestions: [],
  incorrectThemes: [],
  scoreBoard: [],
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      const shuffledQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        isGameStarted: true,
        currentStep: 0,
        score: 0,
        shuffledQuestions,
        incorrectThemes: [],
        scoreBoard: state.scoreBoard,
      };
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "ADD_SCORE":
      return { ...state, score: state.score + action.payload };

    case "ADD_INCORRECT_THEME":
      return {
        ...state,
        incorrectThemes: [...state.incorrectThemes, action.payload],
      };
    case "GAME_OVER":
      return { ...state, isGameOver: true };

  

    case "ADD_TO_SCOREBOARD":
      return {
        ...state,
        scoreBoard: [...state.scoreBoard, action.payload],
      };

    case "RESET_GAME":
      return {
        ...initialState,
        scoreBoard: state.scoreBoard,
      };

    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
