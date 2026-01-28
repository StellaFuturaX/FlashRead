import { useState } from 'react';
import { TextInput } from './components/TextInput';
import { SpeedReader } from './components/SpeedReader';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [currentText, setCurrentText] = useState('');
  const [isReading, setIsReading] = useState(false);

  const handleTextSubmit = (text: string) => {
    setCurrentText(text);
    setIsReading(true);
  };

  const handleBack = () => {
    setIsReading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto py-8 px-4 min-h-screen flex flex-col">
        {isReading && (
          <div className="mb-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Input
            </button>
          </div>
        )}

        {!isReading ? (
          <div className="flex-1 flex items-center justify-center">
            <TextInput onTextSubmit={handleTextSubmit} />
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <SpeedReader text={currentText} onComplete={() => {}} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
