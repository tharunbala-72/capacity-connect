import { NextResponse } from "next/server";
import seedData from "../../../data/seedData.json";

const PASS_PERCENT = 66;

export function GET() {
  const courses = seedData.courses.map(({ questions, ...course }) => ({
    ...course,
    questions: questions.map(({ correctOption, answer, ...question }) => question),
  }));
  return NextResponse.json({ courses, passPercent: PASS_PERCENT });
}

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 }); }
  const course = seedData.courses.find((item) => item.id === body.courseId);
  if (!course || !Array.isArray(body.answers)) return NextResponse.json({ error: "Provide a valid courseId and an answers array." }, { status: 400 });
  const answerByQuestion = new Map(body.answers.map((answer) => [answer.questionId, answer.optionIndex]));
  const correctAnswers = course.questions.filter((question) => answerByQuestion.get(question.id) === (question.correctOption ?? question.answer)).length;
  const scorePercent = Math.round((correctAnswers / course.questions.length) * 100);
  const passed = scorePercent >= PASS_PERCENT;
  return NextResponse.json({ courseId: course.id, correctAnswers, totalQuestions: course.questions.length, scorePercent, passed, unlockedSkillId: passed ? course.skillId : null });
}
