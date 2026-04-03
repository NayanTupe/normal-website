function Question({ onYes, onNo }) {
  return (
    <div className="question-container">
      <p>Would you like to get to know each other a little better? 😊</p>

      <div className="buttons">
        <button onClick={onYes}>Would you like..🖤</button>
        
        <button onClick={onNo}>No 🙂</button>
      </div>
    </div>
  );
}

export default Question;