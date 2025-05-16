
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Pill, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Olá! Sou o assistente da FLYKc. Como posso ajudar você hoje? Gostaria de saber mais sobre nosso suplemento cognitivo?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Predefined responses for the bot
  const responses = {
    default: "Não entendi completamente. Posso ajudar com informações sobre o suplemento FLYKc, seus benefícios ou como adquirir.",
    greeting: "Olá! É um prazer conversar com você. Como posso ajudar hoje?",
    benefits: "O FLYKc é um suplemento cognitivo avançado que oferece diversos benefícios: melhora do foco e concentração, aumento da memória, clareza mental, e suporte energético para o cérebro.",
    ingredients: "O FLYKc contém uma fórmula exclusiva com ingredientes naturais como Bacopa Monnieri, L-Teanina, Fosfatidilserina, Ginkgo Biloba e outros componentes que auxiliam na função cognitiva.",
    howToUse: "Recomendamos tomar 1 cápsula de FLYKc pela manhã, preferencialmente após o café da manhã, para melhores resultados ao longo do dia.",
    price: "O FLYKc está disponível em diferentes opções: frasco com 30 cápsulas (tratamento mensal) por R$197, ou kits promocionais com desconto progressivo para 3 ou 6 meses de tratamento.",
    purchase: "Para adquirir o FLYKc, basta preencher o formulário de contato em nossa página ou clicar no botão 'Comprar agora'. Entregas para todo o Brasil!",
    science: "O FLYKc foi desenvolvido após anos de pesquisas científicas sobre neuroplasticidade e nutrição cerebral. Nossa fórmula é baseada em estudos recentes sobre os melhores compostos para suporte cognitivo."
  };

  // Autoscroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Helper function to get a response based on user input
  const getBotResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("olá") || lowerCaseMessage.includes("oi") || lowerCaseMessage.includes("bom dia") || lowerCaseMessage.includes("boa tarde") || lowerCaseMessage.includes("boa noite")) {
      return responses.greeting;
    }
    
    if (lowerCaseMessage.includes("benefício") || lowerCaseMessage.includes("vantagem") || lowerCaseMessage.includes("para que serve")) {
      return responses.benefits;
    }
    
    if (lowerCaseMessage.includes("ingrediente") || lowerCaseMessage.includes("composto") || lowerCaseMessage.includes("fórmula") || lowerCaseMessage.includes("composição")) {
      return responses.ingredients;
    }
    
    if (lowerCaseMessage.includes("usar") || lowerCaseMessage.includes("tomar") || lowerCaseMessage.includes("consumir") || lowerCaseMessage.includes("dosagem")) {
      return responses.howToUse;
    }
    
    if (lowerCaseMessage.includes("preço") || lowerCaseMessage.includes("valor") || lowerCaseMessage.includes("custo") || lowerCaseMessage.includes("quanto custa")) {
      return responses.price;
    }
    
    if (lowerCaseMessage.includes("comprar") || lowerCaseMessage.includes("adquirir") || lowerCaseMessage.includes("compra") || lowerCaseMessage.includes("onde")) {
      return responses.purchase;
    }
    
    if (lowerCaseMessage.includes("ciência") || lowerCaseMessage.includes("pesquisa") || lowerCaseMessage.includes("estudo") || lowerCaseMessage.includes("científico")) {
      return responses.science;
    }
    
    return responses.default;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getBotResponse(userMessage.content),
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
      
      // Capture lead if email or phone is detected
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const phoneRegex = /(?:^|\D)((?:\d{2,3}[ .-]?){2}\d{4,5})(?:\D|$)/; // Brazilian phone format
      
      const hasEmail = emailRegex.test(userMessage.content);
      const hasPhone = phoneRegex.test(userMessage.content);
      
      if (hasEmail || hasPhone) {
        // Store lead info (this would connect to a backend in a real implementation)
        const leadInfo = userMessage.content;
        console.log("Lead capturado:", leadInfo);
        
        // Show success notification
        toast({
          title: "Contato registrado!",
          description: "Obrigado pelo seu interesse. Entraremos em contato em breve.",
        });
      }
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-flykc-cyan text-black shadow-lg hover:bg-flykc-teal transition-all duration-200 group"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <MessageSquare className="w-7 h-7" />
        )}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-lg shadow-xl transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-flykc-black-alt border border-flykc-gray-alt rounded-lg overflow-hidden flex flex-col h-96">
          {/* Chat header */}
          <div className="bg-flykc-gray p-4 flex items-center gap-3 border-b border-flykc-gray-alt">
            <div className="w-10 h-10 rounded-full bg-flykc-cyan/20 flex items-center justify-center">
              <Pill className="w-5 h-5 text-flykc-cyan" />
            </div>
            <div>
              <h3 className="font-bold text-white">Assistente FLYKc</h3>
              <p className="text-xs text-gray-400">Online agora</p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-flykc-black">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex items-start gap-2",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-flykc-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Pill className="w-4 h-4 text-flykc-cyan" />
                  </div>
                )}
                <div
                  className={cn(
                    "px-4 py-3 rounded-lg max-w-[80%]",
                    msg.role === "user"
                      ? "bg-flykc-cyan text-black"
                      : "bg-flykc-gray text-white"
                  )}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-flykc-teal/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-flykc-teal" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-flykc-cyan/20 flex items-center justify-center flex-shrink-0">
                  <Pill className="w-4 h-4 text-flykc-cyan" />
                </div>
                <div className="px-4 py-3 rounded-lg bg-flykc-gray">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-flykc-gray-alt flex gap-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="resize-none bg-flykc-gray-alt border-flykc-gray text-white min-h-0 h-10 py-2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
            />
            <Button 
              type="submit" 
              className="bg-flykc-cyan hover:bg-flykc-teal text-black h-10 px-3"
              disabled={!message.trim()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
