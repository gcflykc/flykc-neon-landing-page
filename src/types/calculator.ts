
export type BodyType = "ectomorfo" | "mesomorfo" | "endomorfo";
export type ActivityLevel = "sedentário" | "leve" | "moderado" | "intenso" | "atleta";
export type Goal = "perda_peso" | "manutenção" | "ganho_massa" | "performance";

export interface UserData {
  height: number;
  weight: number;
  bodyType: BodyType;
  activityLevel: ActivityLevel;
  age: number;
  goal: Goal;
  mealsPerDay: number;
}

export interface RecommendationData {
  recommendation: string;
  dosage: string;
  timing: string;
  additionalTips: string;
}
