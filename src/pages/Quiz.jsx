import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import "./Quiz.css";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const {
    currentStep,
    shuffledQuestions,
    score,
    isGameStarted,
    isGameOver,
    incorrectThemes,
    recentScores,
  } = state;

  const url = "https://www.notion.so/Mercado-6f5c24fb988a4d07ab59568c7aa82ec9";

  const currentQuestion = shuffledQuestions[currentStep];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nameError, setNameError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");

  const handleAnswerSelect = (index) => {
    setSelectedAnswers(
      (prev) =>
        prev.includes(index)
          ? prev.filter((id) => id !== index) // Desmarca se já estiver marcado
          : [...prev, index] // Marca se não estiver
    );
  };

  const handleSubmitAnswer = () => {
    const isCorrect =
      selectedAnswers.length === currentQuestion.correctAnswers.length &&
      selectedAnswers.every((index) =>
        currentQuestion.correctAnswers.includes(index)
      );

    handleAnswer(isCorrect);
    setSelectedAnswers([]);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleInvalid = (event, field, message) => {
    event.preventDefault();
    if (field === "name") {
      setNameError(message);
    } else if (field === "birth-date") {
      setBirthDateError(message);
    }
  };

  const startGame = () => dispatch({ type: "START_GAME" });

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      dispatch({ type: "ADD_SCORE", payload: 10 });
    } else {
      console.log(incorrectThemes, currentQuestion.theme);
      dispatch({ type: "ADD_INCORRECT_THEME", payload: currentQuestion.theme });
    }

    if (currentStep >= shuffledQuestions.length - 1) {
      dispatch({ type: "GAME_OVER" });
    } else {
      dispatch({ type: "NEXT_STEP" });
    }
  };

  const resetGame = () => {
    dispatch({ type: "ADD_RECENT_SCORES", payload: score });
    dispatch({ type: "RESET_GAME" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      setNameError("Por favor, preencha seu nome.");
    }
    if (!birthDate) {
      setBirthDateError("Por favor, preencha sua data de nascimento.");
    }
    if (userName && birthDate) {
      startGame();
    }
  };

  return (
    <section className="container">
      {!isGameStarted ? (
        <form onSubmit={handleFormSubmit}>
          <h2>
            Agora que você já sabe como contribuir para promover o acesso à água
            potável, combater a fome e apoiar a agricultura sustentável, que tal
            colocar esses conhecimentos em prática?
          </h2>

          <h3>
            Preencha os campos abaixo para participar do nosso quiz super
            divertido e repleto de conhecimento!
          </h3>

          <div className="user-data">
            <div className="input-control">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={handleChange}
                required
                placeholder="Digite seu nome"
                onInvalid={(e) =>
                  handleInvalid(e, "name", "Por favor, preencha seu nome.")
                }
              />
              {nameError && <p className="error">{nameError}</p>}
            </div>

            <div className="input-control">
              <label htmlFor="birth-date">Data de nascimento:</label>
              <input
                type="date"
                id="birth-date"
                value={birthDate}
                required
                onChange={handleDateChange}
                onInvalid={(e) =>
                  handleInvalid(
                    e,
                    "birth-date",
                    "Por favor, preencha sua data de nascimento."
                  )
                }
              />
              {birthDateError && <p className="error">{birthDateError}</p>}
            </div>
            <button type="submit">Começar</button>
          </div>
        </form>
      ) : isGameOver ? (
        <div className="final-score">
          <h2>Fim do jogo!</h2>
          <h3>Pontuação final: {score}</h3>

          {score === 90 && (
            <>
              <h3>Parabéns {userName}! Você acertou todas.</h3>

              <p>
                Você realmente prestou atenção em todas as dicas! Agora, está
                pronto para colocar em prática tudo o que aprendeu.
              </p>
            </>
          )}

          {score > 45 ? (
            <>
              <h3>
                Parabéns {userName}! Você acertou {score / 10} de{" "}
                {shuffledQuestions.length} perguntas.
              </h3>
              <h4>Mesmo assim, considere estudar novamente:</h4>
            </>
          ) : (
            <>
              <h3>Que pena {userName}! Você acertou menos da metade.</h3>
              <h4>Volte nos capítulos citados para melhorar sua nota:</h4>
            </>
          )}

          {incorrectThemes.length > 0 && (
            <div className="themes-container">
              {incorrectThemes.includes("Água e Saneamento") && (
                <Link className="button theme" to="/water/intro">
                  A importância da água
                </Link>
              )}
              {incorrectThemes.includes("Video") && (
                <Link className="button theme" to="/water/video">
                  Vídeo IBGE Explica ODS #6
                </Link>
              )}
              {incorrectThemes.includes("Uso Consciente da Água") && (
                <Link className="button theme" to="/water/tips">
                  Dicas de consumo consciente da água
                </Link>
              )}
            </div>
          )}

          {recentScores.length > 0 && (
            <div>
              <h4>Suas pontuações recentes:</h4>
              <ul>
                {recentScores.map((score, index) => (
                  <li key={index}>
                    Pontuação {index + 1}: {score}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4>
              Agora que você já testou seus conhecimentos, que tal compartilhar
              nas suas redes para que seus amigos possam também aprender e se
              divertir com o quiz?
            </h4>
          </div>

          <div className="themes-container">
          <LinkedinShareButton url={url} title="teste" hashtag="ODS">
            <span className="button">Compartilhar no LinkedIn</span>
          </LinkedinShareButton>

          <WhatsappShareButton url={url} title="teste">
            <span className="button">Compartilhar no WhatsApp</span>
          </WhatsappShareButton>

          <FacebookShareButton url={url} hashtag="#ODS">
            <span className="button">Compartilhar no Facebook</span>
          </FacebookShareButton>
          </div>

          <button className="button" onClick={resetGame}>
            Reiniciar Quiz
          </button>
        </div>
      ) : (
        <>
          <h2>
            Você já respondeu: {currentStep} de {shuffledQuestions.length}
          </h2>
          <h3>Pontuação: {score}</h3>

          <h3>{currentQuestion.question}</h3>

          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                onClick={() => handleAnswerSelect(index)} // Usando index como id
                key={index}
                className={selectedAnswers.includes(index) ? "selected" : ""}
              >
                {option.text}
              </button>
            ))}
          </div>
          <button onClick={handleSubmitAnswer}>Confirmar Resposta</button>
        </>
      )}
    </section>
  );
};

export default Quiz;
