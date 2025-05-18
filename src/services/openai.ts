
interface OpenAIResponse {
  recommendation: string;
  dosage: string;
  timing: string;
  additionalTips: string;
}

export async function getSupplementRecommendation(userData: {
  height: number;
  weight: number;
  bodyType: string;
  activityLevel: string;
  age: number;
  goal: string;
  mealsPerDay: number;
}): Promise<OpenAIResponse> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Você é um especialista em nutrição e suplementação. Forneça recomendações personalizadas de suplementos para o FLYKc, um suplemento cognitivo avançado. Responda em português do Brasil."
          },
          {
            role: "user",
            content: `Preciso de recomendações de suplementação para uma pessoa com as seguintes características:
              - Altura: ${userData.height}cm
              - Peso: ${userData.weight}kg
              - Tipo físico: ${userData.bodyType}
              - Nível de atividade: ${userData.activityLevel}
              - Idade: ${userData.age} anos
              - Objetivo principal: ${userData.goal}
              - Refeições por dia: ${userData.mealsPerDay}
              
              Por favor, forneça detalhes sobre:
              1. Recomendação personalizada para o suplemento cognitivo FLYKc
              2. Dosagem recomendada
              3. Melhor horário para tomar
              4. Dicas adicionais para potencializar os resultados`
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Parse the response into structured data
    const recommendation = extractSection(content, "Recomendação personalizada");
    const dosage = extractSection(content, "Dosagem recomendada");
    const timing = extractSection(content, "Melhor horário");
    const additionalTips = extractSection(content, "Dicas adicionais");
    
    return {
      recommendation,
      dosage,
      timing,
      additionalTips
    };
  } catch (error) {
    console.error("Erro ao obter recomendações:", error);
    throw error;
  }
}

function extractSection(content: string, sectionName: string): string {
  // A simple extraction function that tries to find content related to each section
  // This is a basic implementation - in production you might need something more robust
  const lowerContent = content.toLowerCase();
  const lowerSectionName = sectionName.toLowerCase();
  
  if (lowerContent.includes(lowerSectionName)) {
    // Try to extract the paragraph containing this section
    const startIndex = lowerContent.indexOf(lowerSectionName);
    let endIndex = lowerContent.indexOf("\n\n", startIndex);
    if (endIndex === -1) endIndex = content.length;
    
    return content.substring(startIndex, endIndex).trim();
  }
  
  // Fallback for when specific section headers aren't found
  return "Informação não disponível";
}
