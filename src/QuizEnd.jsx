export default function QuizEnd({ totalQuestions, attempted, timeTaken, correct }) {
  const ratio = Math.round((correct / totalQuestions) * 100);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-base-300 rounded-box">Total Questions: {totalQuestions}</div>
        <div className="p-4 bg-base-300 rounded-box">Attempted: {attempted}</div>
        <div className="p-4 bg-base-300 rounded-box">Correct: {correct}</div>
        <div className="p-4 bg-base-300 rounded-box">Time Taken: {timeTaken}s</div>
        <div className="p-4 bg-base-300 rounded-box col-span-2">
          Success Ratio: <span className="font-bold">{ratio}%</span>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="btn btn-outline">Retake Quiz</button>
      </div>
    </>
  );
}
