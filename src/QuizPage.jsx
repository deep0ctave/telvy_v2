import { useParams } from 'react-router-dom';
import Quiz from './Quiz.jsx';

export default function QuizPage() {
  const { quizId } = useParams();

  // Dummy quiz data (mocked as if fetched using quizId)
  const quizData = {
    id: quizId,
    title: "Basics of Electricity",
    image: "/images/electricity.png", // Optional
    description: "Learn the fundamentals of electric circuits, voltage, and safety.",
    type: "Science",
    numQuestions: 5,
    timeLimit: 300, // in seconds (5 minutes)
    status: "scheduled", // "scheduled" | "live" | "done"
    userAction: "not_attempted", // "not_attempted" | "attempting" | "attempted"
    scheduledTime: new Date(Date.now() + 1000 * 60 * 60), // 1 hour from now
    questions: [
      {
        id: "q1",
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        correctAnswer: "Ohm",
      },
      {
        id: "q2",
        question: "Which particle carries a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        correctAnswer: "Electron",
      },
      {
        id: "q3",
        question: "Which instrument measures electric current?",
        options: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
        correctAnswer: "Ammeter",
      },
      {
        id: "q4",
        question: "What does a fuse do in a circuit?",
        options: [
          "Increases voltage",
          "Measures current",
          "Protects from overload",
          "Stores charge"
        ],
        correctAnswer: "Protects from overload",
      },
      {
        id: "q5",
        question: "Which law states V = IR?",
        options: ["Newton's Law", "Ohm's Law", "Faraday's Law", "Hooke's Law"],
        correctAnswer: "Ohm's Law",
      },
    ],
  };

  return <Quiz {...quizData} />;
}
