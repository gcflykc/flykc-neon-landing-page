
import React from "react";
import { Check, Clock, Pill, Lightbulb } from "lucide-react";

interface RecommendationResultProps {
  isLoading: boolean;
  data?: {
    recommendation: string;
    dosage: string;
    timing: string;
    additionalTips: string;
  };
  error?: string;
}

const RecommendationResult: React.FC<RecommendationResultProps> = ({
  isLoading,
  data,
  error
}) => {
  if (isLoading) {
    return (
      <div className="my-6 p-4 rounded-md bg-flykc-gray/50 border border-flykc-gray">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-8 h-8 border-t-2 border-flykc-cyan rounded-full animate-spin"></div>
          <p className="text-flykc-cyan">Calculando sua recomendação personalizada...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-6 p-4 rounded-md bg-red-900/20 border border-red-700/50">
        <p className="text-red-400 text-center">{error}</p>
        <p className="text-sm text-gray-400 mt-2 text-center">
          Tente novamente ou entre em contato com nossa equipe
        </p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="my-6">
      <h4 className="text-xl font-bold text-flykc-cyan mb-4">Sua Recomendação Personalizada</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flykc-card bg-flykc-gray-alt/50 backdrop-blur-md border border-flykc-gray-alt/70 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="bg-flykc-gradient p-2 rounded-md mt-1">
              <Check size={18} className="text-black" />
            </span>
            <div>
              <h5 className="font-semibold text-white">Recomendação</h5>
              <p className="text-gray-300 mt-1 text-sm">{data.recommendation}</p>
            </div>
          </div>
        </div>
        
        <div className="flykc-card bg-flykc-gray-alt/50 backdrop-blur-md border border-flykc-gray-alt/70 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="bg-flykc-gradient p-2 rounded-md mt-1">
              <Pill size={18} className="text-black" />
            </span>
            <div>
              <h5 className="font-semibold text-white">Dosagem</h5>
              <p className="text-gray-300 mt-1 text-sm">{data.dosage}</p>
            </div>
          </div>
        </div>
        
        <div className="flykc-card bg-flykc-gray-alt/50 backdrop-blur-md border border-flykc-gray-alt/70 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="bg-flykc-gradient p-2 rounded-md mt-1">
              <Clock size={18} className="text-black" />
            </span>
            <div>
              <h5 className="font-semibold text-white">Melhor Horário</h5>
              <p className="text-gray-300 mt-1 text-sm">{data.timing}</p>
            </div>
          </div>
        </div>
        
        <div className="flykc-card bg-flykc-gray-alt/50 backdrop-blur-md border border-flykc-gray-alt/70 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="bg-flykc-gradient p-2 rounded-md mt-1">
              <Lightbulb size={18} className="text-black" />
            </span>
            <div>
              <h5 className="font-semibold text-white">Dicas Adicionais</h5>
              <p className="text-gray-300 mt-1 text-sm">{data.additionalTips}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-flykc-cyan/10 rounded-md">
        <p className="text-xs text-gray-400 text-center">
          Estas recomendações são personalizadas com base nos seus dados e podem variar conforme alterações no seu perfil.
          Consulte sempre um profissional de saúde antes de iniciar qualquer suplementação.
        </p>
      </div>
    </div>
  );
};

export default RecommendationResult;
