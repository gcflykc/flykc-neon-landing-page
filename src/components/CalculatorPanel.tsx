
import React, { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { User, Weight, Activity, Calendar, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import RecommendationResult from "./RecommendationResult";
import { getSupplementRecommendation } from "@/services/openai";
import { BodyType, ActivityLevel, Goal, RecommendationData } from "@/types/calculator";

const CalculatorPanel = () => {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [bodyType, setBodyType] = useState<BodyType>("mesomorfo");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderado");
  const [age, setAge] = useState<number>(30);
  const [goal, setGoal] = useState<Goal>("manutenção");
  const [mealsPerDay, setMealsPerDay] = useState<number>(3);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<RecommendationData | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [apiKeyInput, setApiKeyInput] = useState<string>("");
  const [showApiKeyInput, setShowApiKeyInput] = useState<boolean>(!import.meta.env.VITE_OPENAI_API_KEY);
  
  const { toast } = useToast();
  
  const handleCalculate = async () => {
    setIsLoading(true);
    setError(undefined);
    
    // Check if we have an API key from the environment or input
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || apiKeyInput;
    
    if (!apiKey) {
      setShowApiKeyInput(true);
      setIsLoading(false);
      setError("É necessário fornecer uma chave de API OpenAI para continuar.");
      return;
    }
    
    try {
      // Set the API key in environment if it was provided via input
      if (apiKeyInput && !import.meta.env.VITE_OPENAI_API_KEY) {
        // This doesn't actually modify the environment variable permanently
        // It's just for this session's API calls
        (window as any).OPENAI_API_KEY = apiKeyInput;
      }
      
      const userData = {
        height,
        weight,
        bodyType,
        activityLevel,
        age,
        goal,
        mealsPerDay
      };
      
      const result = await getSupplementRecommendation(userData);
      setRecommendation(result);
      toast({
        title: "Recomendação gerada",
        description: "Sua recomendação personalizada foi calculada com sucesso.",
      });
    } catch (err) {
      console.error("Erro ao gerar recomendação:", err);
      setError("Não foi possível gerar sua recomendação. Verifique sua conexão e a chave da API.");
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro ao gerar sua recomendação.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flykc-card bg-flykc-gray-alt/50 backdrop-blur-md border border-flykc-gray-alt/70 p-6 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="bg-flykc-gradient p-2 rounded-md">
          <User size={24} className="text-black" />
        </span>
        Cálculo Personalizado
      </h3>
      
      {showApiKeyInput && (
        <div className="mb-6 p-4 border border-flykc-gray rounded-lg bg-flykc-gray/30">
          <Label className="text-gray-300 mb-2 block">
            Chave de API OpenAI
          </Label>
          <Input
            type="password"
            placeholder="Insira sua chave de API OpenAI"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            className="border-flykc-gray-alt bg-flykc-gray text-white"
          />
          <p className="text-xs text-gray-400 mt-2">
            Necessário para gerar recomendações personalizadas. Sua chave é usada apenas nesta sessão e não é armazenada.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-gray-300 flex items-center gap-2">
                <User size={18} className="text-flykc-cyan" />
                Altura (cm)
              </Label>
              <span className="text-flykc-cyan font-medium">{height} cm</span>
            </div>
            <Slider
              value={[height]}
              min={140}
              max={220}
              step={1}
              className="bg-flykc-gray"
              onValueChange={(value) => setHeight(value[0])}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-gray-300 flex items-center gap-2">
                <Weight size={18} className="text-flykc-cyan" />
                Peso (kg)
              </Label>
              <span className="text-flykc-cyan font-medium">{weight} kg</span>
            </div>
            <Slider
              value={[weight]}
              min={40}
              max={150}
              step={1}
              className="bg-flykc-gray"
              onValueChange={(value) => setWeight(value[0])}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-gray-300 flex items-center gap-2">
              <User size={18} className="text-flykc-cyan" />
              Porte de Corpo
            </Label>
            <Select
              value={bodyType}
              onValueChange={(value: BodyType) => setBodyType(value)}
            >
              <SelectTrigger className="border-flykc-gray-alt bg-flykc-gray text-white">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent className="bg-flykc-gray-alt border-flykc-gray text-white">
                <SelectItem value="ectomorfo">Ectomorfo (magro)</SelectItem>
                <SelectItem value="mesomorfo">Mesomorfo (atlético)</SelectItem>
                <SelectItem value="endomorfo">Endomorfo (mais forte)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-gray-300 flex items-center gap-2">
              <Activity size={18} className="text-flykc-cyan" />
              Nível de Atividade
            </Label>
            <Select
              value={activityLevel}
              onValueChange={(value: ActivityLevel) => setActivityLevel(value)}
            >
              <SelectTrigger className="border-flykc-gray-alt bg-flykc-gray text-white">
                <SelectValue placeholder="Selecione o nível" />
              </SelectTrigger>
              <SelectContent className="bg-flykc-gray-alt border-flykc-gray text-white">
                <SelectItem value="sedentário">Sedentário</SelectItem>
                <SelectItem value="leve">Levemente ativo</SelectItem>
                <SelectItem value="moderado">Moderadamente ativo</SelectItem>
                <SelectItem value="intenso">Muito ativo</SelectItem>
                <SelectItem value="atleta">Atleta profissional</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-gray-300 flex items-center gap-2">
                <Calendar size={18} className="text-flykc-cyan" />
                Idade
              </Label>
              <span className="text-flykc-cyan font-medium">{age} anos</span>
            </div>
            <Slider
              value={[age]}
              min={15}
              max={80}
              step={1}
              className="bg-flykc-gray"
              onValueChange={(value) => setAge(value[0])}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-gray-300 flex items-center gap-2">
              <Activity size={18} className="text-flykc-cyan" />
              Objetivo
            </Label>
            <Select
              value={goal}
              onValueChange={(value: Goal) => setGoal(value)}
            >
              <SelectTrigger className="border-flykc-gray-alt bg-flykc-gray text-white">
                <SelectValue placeholder="Selecione seu objetivo" />
              </SelectTrigger>
              <SelectContent className="bg-flykc-gray-alt border-flykc-gray text-white">
                <SelectItem value="perda_peso">Perda de peso</SelectItem>
                <SelectItem value="manutenção">Manutenção</SelectItem>
                <SelectItem value="ganho_massa">Ganho de massa</SelectItem>
                <SelectItem value="performance">Aumento de performance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-gray-300 flex items-center gap-2">
                <Utensils size={18} className="text-flykc-cyan" />
                Refeições por dia
              </Label>
              <span className="text-flykc-cyan font-medium">{mealsPerDay}</span>
            </div>
            <Slider
              value={[mealsPerDay]}
              min={2}
              max={6}
              step={1}
              className="bg-flykc-gray"
              onValueChange={(value) => setMealsPerDay(value[0])}
            />
          </div>
          
          <div className="pt-4">
            <button 
              onClick={handleCalculate}
              className="flykc-btn flykc-glow w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Calculando...' : 'Calcular Suplementação Ideal'}
            </button>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Resultados baseados em análises e estudos científicos
            </p>
          </div>
        </div>
      </div>
      
      {/* Recommendation Results */}
      {(isLoading || recommendation || error) && (
        <RecommendationResult 
          isLoading={isLoading} 
          data={recommendation} 
          error={error} 
        />
      )}
    </div>
  );
};

export default CalculatorPanel;
