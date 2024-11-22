import React, { useState } from "react";

const EmailSender: React.FC = () => {
  const [toMail, setToMail] = useState("");
  const [content, setContent] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async () => {
    try {
      const response = await fetch(
        "https://us-central1-projectemailsendertest.cloudfunctions.net/function-1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ toMail, content }),
        }
      );

      if (response.ok) {
        const text = await response.text();
        setResponseMessage(text);
        setError("");
      } else {
        const errorText = await response.text();
        setError(`Erro ${response.status}: ${errorText}`);
        setResponseMessage("");
      }
    } catch (err) {
      setError(`Erro ao enviar requisição: ${err}`);
      setResponseMessage("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div className="input-email" style={{ marginBottom: "10px" }}>
        <label>
          Destinatário:
          <input
            type="email"
            value={toMail}
            onChange={(e) => setToMail(e.target.value)}
            style={{
              marginLeft: "10px",
              padding: "5px",
              width: "300px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
      </div>
      <div className="input-email" style={{ marginBottom: "10px" }}>
        <label>
          Conteúdo:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              display: "block",
              marginTop: "5px",
              padding: "5px",
              width: "300px",
              height: "100px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
      </div>
      <button
        onClick={sendEmail}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Enviar Email
      </button>
      {responseMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>{responseMessage}</p>
      )}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default EmailSender;
