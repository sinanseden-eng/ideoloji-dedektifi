import { create } from 'zustand';

export const questions = [
  { id: 1, text: "Ekonomi tamamen özelleştirilmeli, devlet elini cebimden çekmeli.", axis: 'x', weight: 2 },
  { id: 2, text: "Devletin milletin yatak odasına kadar girmesi ahlaki çöküşü engeller.", axis: 'y', weight: 2 },
  { id: 3, text: "Sınırlar kalemle çizilir, üzerinde tartışmak vatan hainliğidir.", axis: 'y', weight: 1 },
  { id: 4, text: "Geçmişe özlem duymak, bugünü yaşanmaz kılmanın en zarif yoludur.", axis: 'x', weight: -1 }
];

export const useQuizStore = create((set) => ({
  currentQuestion: 0,
  scores: { x: 0, y: 0 },
  answers: [],
  answerQuestion: (value, axis, weight) => {
    set((state) => {
      const adjustedValue = (value - 2) * weight;
      const newScores = {
        ...state.scores,
        [axis]: state.scores[axis] + (adjustedValue * 25)
      };
      return {
        scores: newScores,
        currentQuestion: state.currentQuestion + 1,
        answers: [...state.answers, { id: state.currentQuestion, value }]
      };
    });
  },
  resetQuiz: () => set({ currentQuestion: 0, scores: { x: 0, y: 0 }, answers: [] })
}));
