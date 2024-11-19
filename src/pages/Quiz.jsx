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
  } = state;

  const url = "https://welington1209.github.io/Hackaton-CPDI-ODS";

  const currentQuestion = shuffledQuestions[currentStep];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nameError, setNameError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");

  const handleAnswerSelect = (index) => {
    setSelectedAnswers((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index]
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

  const startGame = () => {
    dispatch({ type: "START_GAME" });
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      dispatch({ type: "ADD_SCORE", payload: 10 });
    } else {
      console.log(incorrectThemes, currentQuestion.theme);
      dispatch({ type: "ADD_INCORRECT_THEME", payload: currentQuestion.theme });
    }

    if (currentStep >= shuffledQuestions.length - 1) {
      dispatch({
        type: "ADD_TO_SCOREBOARD",
        payload: { name: userName, score },
      });
      dispatch({ type: "GAME_OVER" });
    } else {
      dispatch({ type: "NEXT_STEP" });
    }
  };

  const resetGame = () => {
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
          <h3 className="inconsolata-text-medium title-container">
            Agora que você já sabe como contribuir para promover o acesso à água
            potável, combater a fome e apoiar a agricultura sustentável, que tal
            colocar esses conhecimentos em prática?
          </h3>

          <h3 className="inconsolata-text-medium title-container">
            Preencha os campos abaixo para participar do nosso quiz super
            divertido e repleto de conhecimento!
          </h3>

          <div className="user-data">
            <div className="input-control">
              <label className="inconsolata-title" htmlFor="name">
                Nome:
              </label>
              <input
                className="inconsolata-text-medium"
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
              {nameError ? (
                <p className="error">{nameError}</p>
              ) : (
                <p>Queremos saber como te chamar.</p>
              )}
            </div>

            <div className="input-control">
              <label className="inconsolata-title" htmlFor="birth-date">
                Data de nascimento:
              </label>
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
              {birthDateError ? (
                <p className="error">{birthDateError}</p>
              ) : (
                <p>
                  Assim, você nos ajuda a entender melhor a faixa etária do
                  nosso público.
                </p>
              )}
            </div>
            <button className="button inconsolata-text-medium" type="submit">
              Começar
            </button>
          </div>
        </form>
      ) : isGameOver ? (
        <div className="final-score">
          <div className="title-container">
            <h2 className="inconsolata-title">Fim do jogo!</h2>
            <h3 className="inconsolata-text-medium">
              Pontuação final: {score}
            </h3>
          </div>

          <div className="final-score-container">
            <div className="game-over">
              {score === 120 && (
                <>
                  <h3 className="inconsolata-title">
                    Parabéns {userName}! Você acertou todas.
                  </h3>

                  <p className="inconsolata-text-medium">
                    Você realmente prestou atenção em todas as dicas! Agora,
                    está pronto para compartilhar com os amigos e colocar em
                    prática tudo o que aprendeu.
                  </p>
                </>
              )}

              {score >= 60 ? (
                <>
                  <h3 className="inconsolata-title">
                    Parabéns {userName}! Você acertou {score / 10} de{" "}
                    {shuffledQuestions.length} perguntas.
                  </h3>
                  <h4 className="inconsolata-text-medium">
                    Mesmo assim, considere estudar novamente:
                  </h4>
                </>
              ) : (
                <>
                  <h3 className="inconsolata-title">
                    Que pena {userName}! Você acertou menos da metade.
                  </h3>
                  <h4 className="inconsolata-text-medium">
                    Volte nos capítulos citados abaixo para melhorar sua nota:
                  </h4>
                </>
              )}

              {incorrectThemes.length > 0 && (
                <div className="themes-container">
                  {incorrectThemes.includes("Água e Saneamento") && (
                    <Link
                      className="button theme inconsolata-text-medium"
                      to="/water/intro"
                    >
                      A importância da água
                    </Link>
                  )}
                  {incorrectThemes.includes("Video") && (
                    <Link
                      className="button theme inconsolata-text-medium"
                      to="/water/video"
                    >
                      Vídeo IBGE Explica ODS #6
                    </Link>
                  )}
                  {incorrectThemes.includes("Uso Consciente da Água") && (
                    <Link
                      className="button theme inconsolata-text-medium"
                      to="/water/tips"
                    >
                      Dicas de consumo consciente da água
                    </Link>
                  )}

                  {incorrectThemes.includes("Fome Zero") && (
                    <Link
                      className="button theme inconsolata-text-medium"
                      to="/agriculture/intro"
                    >
                      Fome Zero
                    </Link>
                  )}

                  {incorrectThemes.includes("Video Agro") && (
                    <Link
                      className="button theme inconsolata-text-medium"
                      to="/agriculture/video"
                    >
                      Video IBGE explica ODS #2
                    </Link>
                  )}

                  {incorrectThemes.includes("Dicas Agro") && (
                    <Link
                      className="button theme inconsolata-text-medium"
                      to="/agriculture/tips"
                    >
                      Dicas agricultura sustentável
                    </Link>
                  )}
                </div>
              )}

              {state.scoreBoard.length > 0 && (
                <div className="score-board">
                  <h3 className="inconsolata-title">Placar</h3>
                  <ul>
                    {state.scoreBoard.map((entry, index) => (
                      <li key={index} className="inconsolata-text-medium">
                        {entry.name}: {entry.score} pontos
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="share">
              <div className="title-share">
                <h4 className="inconsolata-title">
                  Agora que você já testou seus conhecimentos, que tal
                  compartilhar nas suas redes para que seus amigos possam também
                  aprender e se divertir com o quiz?
                </h4>
              </div>

              <div className="links-container">
                <LinkedinShareButton
                  url={url}
                  source="Espaço ODS"
                  hashtag="ODS"
                >
                  <span className="in button inconsolata-title">
                    Compartilhar no LinkedIn
                  </span>
                </LinkedinShareButton>

                <WhatsappShareButton
                  url={url}
                  title="🌍 Descubra como você pode ajudar o planeta! Explore dicas incríveis para contribuir com os Objetivos de Desenvolvimento Sustentável e teste seus conhecimentos em um quiz divertido. 💡✅"
                >
                  <span className="wpp button inconsolata-title">
                    Compartilhar no WhatsApp
                  </span>
                </WhatsappShareButton>

                <FacebookShareButton url={url} hashtag="#ODS">
                  <span className="fb button inconsolata-title">
                    Compartilhar no Facebook
                  </span>
                </FacebookShareButton>
              </div>

              <button
                className="button inconsolata-text-medium"
                onClick={resetGame}
              >
                Reiniciar Quiz
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="header-quiz">
           <div className="steps-container">
           <h3 className="inconsolata-title current-step">
              Você já respondeu: {currentStep} de {shuffledQuestions.length}
            </h3>
            <h3 className="inconsolata-title score">Pontuação: {score}</h3>
           </div>

            <h3 className="inconsolata-text-medium question">
              {currentQuestion.question}
            </h3>
          </div>

          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                onClick={() => handleAnswerSelect(index)}
                key={index}
                className={[
                  "inconsolata-title",
                  selectedAnswers.includes(index) ? "selected" : "",
                ].join(" ")}
              >
                {option.text}
              </button>
            ))}
          </div>
          <button
            className="inconsolata-text-medium button btn"
            onClick={handleSubmitAnswer}
          >
            Confirmar Resposta
          </button>
        </>
      )}
    </section>
  );
};

export default Quiz;
