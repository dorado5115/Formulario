import React from "react";

const questionStyles = {
  container: {
    padding: "2em 0",
    borderBottom: "solid 1px #ececec"
  },
  question: {
    fontWeight: 600
  },
  answerContainer: {
    margin: ".5em 0"
  },
  answerLabel: {
    margin: "0 .5em",
    color: "#6b737d"
  },
  textArea: {
    minWidth: "95%",
    maxWidth: "95%",
    outline: "none",
    border: "solid 2px #ececec",
    borderRadius: "5px",
    minHeight: "5em",
    padding: "1em",
    margin: "1em 0"
  }
};

function Answer({ value, id }) {
  return (
    <div style={questionStyles.answerContainer}>
      <input type="radio" id={value} name={id} value={value} />
      <label style={questionStyles.answerLabel} for={value}>
        {value}
      </label>
    </div>
  );
}

function Short({ id = "", body = "" }) {
  return (
    <div style={questionStyles.container}>
      <p style={questionStyles.question}>{body}</p>
      {answers.map((e) => (
        <Answer value={e.body} id={id} />
      ))}
    </div>
  );
}

function Text({ body }) {
  return (
    <div style={questionStyles.container}>
      <p style={questionStyles.question}>{body}</p>
      <textarea
        style={questionStyles.textArea}
        placeholder="Escribe tu respuesta aquí..."
      />
    </div>
  );
}

export { Text, Short };

export default function build(exam = {}) {
  return exam.questions.map((question) => {
    if (question.type == "short")
      return (
        <Short
          id={question.id}
          body={question.body}
        />
      );
    else if (question.type == "text") return <Text body={question.body} />;
  });
}
