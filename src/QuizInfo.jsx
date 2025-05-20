export default function QuizInfo({
  title,
  image,
  description,
  type,
  numQuestions,
  timeLimit,
  status,
  scheduledTime,
  onStart,
}) {
  const remainingTime = Math.max((scheduledTime - new Date()) / 1000, 0);

  return (
    <>
      <h1 className="card-title text-3xl font-bold mb-2">{title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="badge badge-info">{type}</span>
        <span className="badge badge-outline">{numQuestions} Questions</span>
        <span className="badge badge-outline">{timeLimit / 60} min</span>
        <span className={`badge ${status === 'done' ? 'badge-success' : 'badge-warning'}`}>
          {status}
        </span>
      </div>
      <p className="text-base opacity-80 mb-4">{description}</p>

      {status === 'scheduled' ? (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-4">
          {['days', 'hours', 'min', 'sec'].map((unit, i) => {
            const values = [
              Math.floor(remainingTime / (60 * 60 * 24)),
              Math.floor((remainingTime / (60 * 60)) % 24),
              Math.floor((remainingTime / 60) % 60),
              Math.floor(remainingTime % 60),
            ];
            return (
              <div key={unit} className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ '--value': values[i] }}></span>
                </span>
                {unit}
              </div>
            );
          })}
        </div>
      ) : (
        <button className="btn btn-accent" onClick={onStart}>
          {status === 'done' ? 'Review Quiz' : 'Start Quiz'}
        </button>
      )}
    </>
  );
}
