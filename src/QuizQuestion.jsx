import { useEffect, useState } from 'react';

export default function QuizQuestion({ question, index, total, onAnswer, timeLimit }) {
  const [selected, setSelected] = useState(null);
  const [progress, setProgress] = useState(100);
  const perQTime = timeLimit / total;

  useEffect(() => {
    let counter = perQTime;
    const interval = setInterval(() => {
      counter--;
      setProgress((counter / perQTime) * 100);
      if (counter <= 0) {
        handleNext(null);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [question]);

  const handleNext = (answer) => {
    onAnswer(answer);
    setSelected(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Q{index + 1} of {total}</h2>
        <div className="radial-progress text-primary" style={{ "--value": progress }} role="progressbar">
          {Math.floor(progress)}%
        </div>
      </div>
      <p className="mb-4 font-medium">{question.question}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((opt) => (
          <button
            key={opt}
            className={`btn ${selected === opt ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => {
              setSelected(opt);
              handleNext(opt);
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
