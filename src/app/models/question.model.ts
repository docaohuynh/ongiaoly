export interface QuestionModel {
    question: string,
    answers: string[],
}

export interface QuestionJsonModel {
    questions: QuestionModel[]
}