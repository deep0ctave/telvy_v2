import React from "react";

const QuizzesPage = () => {
  return (
    <div className="flex-1">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content px-10 py-12">
        <h1 className="text-5xl font-extrabold">Quizzes</h1>
        <p className="mt-4 max-w-2xl text-base opacity-90">
          Welcome to your quiz dashboard! Here you can view and manage all your quizzes – whether they're completed, currently live, or scheduled for later.
        </p>
      </div>

      {/* Submenu Cards */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Completed Quizzes */}
        <div className="card bg-base-200 text-base-content shadow hover:shadow-lg transition cursor-pointer">
          <div className="card-body">
            <h2 className="card-title text-lg">Completed Quizzes</h2>
            <p>Review your past quiz attempts, see your scores, and learn from detailed feedback.</p>
          </div>
        </div>

        {/* Live Quizzes */}
        <div className="card bg-base-200 text-base-content shadow hover:shadow-lg transition cursor-pointer">
          <div className="card-body">
            <h2 className="card-title text-lg">Live Quizzes</h2>
            <p>Jump into quizzes happening right now! Compete in real-time with your classmates.</p>
          </div>
        </div>

        {/* Scheduled Quizzes */}
        <div className="card bg-base-200 text-base-content shadow hover:shadow-lg transition cursor-pointer">
          <div className="card-body">
            <h2 className="card-title text-lg">Scheduled Quizzes</h2>
            <p>Check out upcoming quizzes, their start times, and prepare ahead of time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;
