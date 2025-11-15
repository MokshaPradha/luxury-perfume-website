import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/products';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: { text: string; value: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What type of scents do you usually prefer?',
    options: [
      { text: 'Fresh & Citrus', value: 'fresh' },
      { text: 'Floral & Romantic', value: 'floral' },
      { text: 'Woody & Earthy', value: 'woody' },
      { text: 'Warm & Spicy', value: 'spicy' },
    ],
  },
  {
    id: 2,
    question: 'When do you plan to wear this fragrance?',
    options: [
      { text: 'Daytime / Office', value: 'day' },
      { text: 'Evening / Nights Out', value: 'evening' },
      { text: 'Special Occasions', value: 'special' },
      { text: 'Everyday Wear', value: 'everyday' },
    ],
  },
  {
    id: 3,
    question: 'How would you describe your style?',
    options: [
      { text: 'Classic & Elegant', value: 'classic' },
      { text: 'Modern & Trendy', value: 'modern' },
      { text: 'Bold & Daring', value: 'bold' },
      { text: 'Minimalist & Subtle', value: 'minimal' },
    ],
  },
  {
    id: 4,
    question: 'What intensity do you prefer?',
    options: [
      { text: 'Light & Refreshing', value: 'light' },
      { text: 'Moderate', value: 'moderate' },
      { text: 'Strong & Long-lasting', value: 'strong' },
    ],
  },
];

export function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };
  
  // Simple recommendation logic based on answers
  const getRecommendations = () => {
    const userPreferences = Object.values(answers);
    
    // Filter products based on user preferences
    let recommended = [...products];
    
    if (userPreferences.includes('fresh')) {
      recommended = recommended.filter(p => 
        p.notes.top.some(n => ['Bergamot', 'Lemon', 'Grapefruit', 'Citrus'].includes(n))
      );
    }
    
    if (userPreferences.includes('floral')) {
      recommended = recommended.filter(p => 
        p.notes.heart.some(n => ['Rose', 'Jasmine', 'Iris'].includes(n))
      );
    }
    
    if (userPreferences.includes('woody') || userPreferences.includes('spicy')) {
      recommended = recommended.filter(p => 
        p.notes.base.some(n => ['Cedarwood', 'Sandalwood', 'Oud Wood', 'Patchouli'].includes(n))
      );
    }
    
    return recommended.slice(0, 4);
  };
  
  const recommendations = showResults ? getRecommendations() : [];
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!showResults ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-[var(--color-gold)]" />
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
                Find Your Perfect Scent
              </h1>
              <p className="text-muted-foreground">
                Answer a few questions to discover fragrances tailored to your preferences
              </p>
            </motion.div>
            
            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--color-gold)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            
            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="font-['Cormorant'] text-3xl mb-8 text-center">
                    {questions[currentQuestion].question}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {questions[currentQuestion].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          answers[currentQuestion] === option.value
                            ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10'
                            : 'border-border hover:border-[var(--color-gold)]/50'
                        }`}
                      >
                        <span className="text-lg">{option.text}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    
                    <Button
                      onClick={handleNext}
                      disabled={!answers[currentQuestion]}
                      className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90"
                    >
                      {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-12">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-[var(--color-gold)]" />
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
                Your Perfect Matches
              </h1>
              <p className="text-muted-foreground mb-8">
                Based on your preferences, we recommend these exquisite fragrances
              </p>
            </div>
            
            {recommendations.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {recommendations.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center space-x-4">
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                  >
                    Retake Quiz
                  </Button>
                  <Button
                    onClick={() => navigate('/shop')}
                    className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90"
                  >
                    Browse All Fragrances
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground mb-8">
                  We couldn't find exact matches, but we have many fragrances you might love!
                </p>
                <div className="space-x-4">
                  <Button onClick={handleRestart} variant="outline">
                    Retake Quiz
                  </Button>
                  <Button
                    onClick={() => navigate('/shop')}
                    className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90"
                  >
                    Browse All Fragrances
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
