import { useState } from 'react';
import QuizInfo from './QuizInfo.jsx';
import QuizQuestion from './QuizQuestion.jsx';
import QuizEnd from './QuizEnd.jsx';

export default function Quiz(props) {
  const {
    title,
    image,
    description,
    type,
    numQuestions,
    timeLimit,
    status,
    userAction,
    scheduledTime,
    questions,
  } = props;

  const [step, setStep] = useState(
    userAction === 'attempted' ? 'end' : userAction === 'attempting' ? 'question' : 'info'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => setStep('question');
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setStep('end');
    }
  };

  return (
    <div className="flex-1 p-10 flex justify-center items-center">
      <div className="card w-full max-w-3xl bg-base-200 shadow-xl">
        <div className="card-body">
          {step === 'info' && (
            <QuizInfo
              title={title}
              image={image}
              description={description}
              type={type}
              numQuestions={numQuestions}
              timeLimit={timeLimit}
              status={status}
              scheduledTime={scheduledTime}
              onStart={handleStart}
            />
          )}
          {step === 'question' && (
            <QuizQuestion
              question={questions[currentIndex]}
              index={currentIndex}
              total={questions.length}
              onAnswer={handleAnswer}
              timeLimit={timeLimit}
            />
          )}
          {step === 'end' && (
            <QuizEnd
              totalQuestions={questions.length}
              attempted={answers.length}
              timeTaken={timeLimit - 123} // dummy timer diff
              correct={answers.filter((a, i) => a === questions[i].correctAnswer).length}
            />
          )}
        </div>
      </div>
    </div>
  );
}
