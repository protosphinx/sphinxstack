(() => {
  const form = document.querySelector("[data-beta-form]");
  const quiz = document.querySelector("[data-quiz]");
  if (!form || !quiz) return;

  const questions = [
    {
      id: "hermes-maker",
      prompt: "Who develops Hermes Agent?",
      choices: ["Nous Research", "Anthropic", "OpenAI", "Anomaly"],
    },
    {
      id: "hermes-purpose",
      prompt: "Which description best matches Hermes Agent?",
      choices: [
        "A self-improving autonomous agent with persistent memory and skills",
        "A hosted model-comparison leaderboard",
        "A package manager for MCP servers",
        "An IDE-only autocomplete extension",
      ],
    },
    {
      id: "codex-version",
      prompt: "As of 31 July 2026, what is the latest stable Codex CLI release?",
      choices: ["0.146.0", "0.145.0", "1.46.0", "2.1.220"],
    },
    {
      id: "claude-code-version",
      prompt: "As of 31 July 2026, what is the latest stable Claude Code release?",
      choices: ["2.1.220", "2.1.202", "0.146.0", "4.1.2"],
    },
    {
      id: "opencode-purpose",
      prompt: "What is OpenCode?",
      choices: [
        "An open-source AI coding agent for the terminal, desktop, and IDE",
        "OpenAI’s source-code hosting platform",
        "A browser-only JavaScript playground",
        "A model released by Nous Research",
      ],
    },
  ];

  const ready = quiz.querySelector("[data-quiz-ready]");
  const live = quiz.querySelector("[data-quiz-live]");
  const complete = quiz.querySelector("[data-quiz-complete]");
  const startButton = quiz.querySelector("[data-quiz-start]");
  const nextButton = quiz.querySelector("[data-quiz-next]");
  const progress = quiz.querySelector("[data-quiz-progress]");
  const timer = quiz.querySelector("[data-quiz-timer]");
  const meter = quiz.querySelector("[data-quiz-meter]");
  const prompt = quiz.querySelector("[data-quiz-prompt]");
  const choices = quiz.querySelector("[data-quiz-choices]");
  const quizError = quiz.querySelector("[data-quiz-error]");
  const summary = quiz.querySelector("[data-quiz-summary]");
  const formError = form.querySelector("[data-form-error]");
  const answerField = form.querySelector("[data-quiz-answers]");
  const durationField = form.querySelector("[data-quiz-duration]");
  const tabSwitchField = form.querySelector("[data-quiz-tab-switches]");

  const durationSeconds = 60;
  let active = false;
  let finished = false;
  let questionIndex = 0;
  let startedAt = 0;
  let interval = null;
  let tabSwitches = 0;
  const answers = [];

  const shuffled = (items) => {
    const next = [...items];
    for (let index = next.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
    }
    return next;
  };

  const selectedAnswer = () =>
    choices.querySelector('input[name="active_quiz_answer"]:checked')?.value ?? "";

  const renderQuestion = () => {
    const question = questions[questionIndex];
    progress.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
    prompt.textContent = question.prompt;
    choices.replaceChildren();
    shuffled(question.choices).forEach((choice, index) => {
      const id = `beta-answer-${questionIndex}-${index}`;
      const label = document.createElement("label");
      const input = document.createElement("input");
      const text = document.createElement("span");
      input.id = id;
      input.type = "radio";
      input.name = "active_quiz_answer";
      input.value = choice;
      text.textContent = choice;
      label.append(input, text);
      choices.append(label);
    });
    quizError.hidden = true;
    nextButton.textContent = questionIndex === questions.length - 1
      ? "Finish tooling check"
      : "Next question";
    prompt.focus();
  };

  const updateTimer = () => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const remaining = Math.max(0, durationSeconds - elapsed);
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    timer.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
    meter.style.width = `${(remaining / durationSeconds) * 100}%`;
    timer.classList.toggle("is-low", remaining <= 10);
    if (remaining === 0) finishQuiz(true);
  };

  const saveAnswer = () => {
    const answer = selectedAnswer();
    if (!answer) return false;
    answers.push({
      question: questions[questionIndex].id,
      answer,
    });
    return true;
  };

  function finishQuiz(timedOut) {
    if (finished) return;
    if (timedOut) {
      const answer = selectedAnswer();
      if (answer && !answers.some((item) => item.question === questions[questionIndex].id)) {
        answers.push({
          question: questions[questionIndex].id,
          answer,
        });
      }
    }
    finished = true;
    active = false;
    window.clearInterval(interval);
    const elapsed = Math.min(
      durationSeconds,
      Math.max(1, Math.ceil((Date.now() - startedAt) / 1000)),
    );
    answerField.value = JSON.stringify(answers);
    durationField.value = String(elapsed);
    tabSwitchField.value = String(tabSwitches);
    choices.querySelectorAll("input").forEach((input) => {
      input.disabled = true;
    });
    live.hidden = true;
    complete.hidden = false;
    summary.textContent = timedOut
      ? `Time finished. ${answers.length} of ${questions.length} answers were saved.`
      : `All ${answers.length} answers were saved in ${elapsed} seconds.`;
    complete.focus();
  }

  startButton.addEventListener("click", () => {
    ready.hidden = true;
    live.hidden = false;
    active = true;
    startedAt = Date.now();
    renderQuestion();
    updateTimer();
    interval = window.setInterval(updateTimer, 250);
  });

  nextButton.addEventListener("click", () => {
    if (!saveAnswer()) {
      quizError.hidden = false;
      choices.querySelector("input")?.focus();
      return;
    }
    if (questionIndex === questions.length - 1) {
      finishQuiz(false);
      return;
    }
    questionIndex += 1;
    renderQuestion();
  });

  document.addEventListener("visibilitychange", () => {
    if (active && document.hidden) tabSwitches += 1;
  });

  form.addEventListener("submit", (event) => {
    formError.hidden = true;
    formError.textContent = "";

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }
    if (!finished) {
      event.preventDefault();
      formError.textContent = "Complete the 60-second tooling check before sending your application.";
      formError.hidden = false;
      quiz.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const endpoint = form.dataset.endpoint.trim();
    if (!endpoint) {
      event.preventDefault();
      formError.textContent = "Applications are not open yet. The submission destination still needs to be connected.";
      formError.hidden = false;
      return;
    }
    form.action = endpoint;
  });
})();
