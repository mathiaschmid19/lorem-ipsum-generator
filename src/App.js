import React, { useState } from 'react';
import './App.css';

function App() {
  const [paragraphs, setParagraphs] = useState(3);
  const [wordsPerParagraph, setWordsPerParagraph] = useState(50);
  const [generatedText, setGeneratedText] = useState('');
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('latin');

  // Multi-language word banks
  const wordBanks = {
    latin: {
      name: 'Latin (Lorem Ipsum)',
      words: [
        'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
        'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
        'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
        'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
        'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
        'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
        'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
        'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'at', 'vero', 'eos',
        'accusamus', 'accusantium', 'doloremque', 'laudantium', 'totam', 'rem',
        'aperiam', 'eaque', 'ipsa', 'quae', 'ab', 'illo', 'inventore', 'veritatis',
        'et', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta', 'sunt', 'explicabo',
        'nemo', 'ipsam', 'quia', 'voluptas', 'aspernatur', 'aut', 'odit', 'fugit'
      ]
    },
    french: {
      name: 'Français',
      words: [
        'le', 'de', 'et', 'à', 'un', 'il', 'être', 'et', 'en', 'avoir', 'que', 'pour',
        'dans', 'ce', 'son', 'une', 'sur', 'avec', 'ne', 'se', 'pas', 'tout', 'plus',
        'par', 'grand', 'ce', 'le', 'premier', 'vous', 'ou', 'son', 'lui', 'nous',
        'comme', 'mais', 'pouvoir', 'dire', 'elle', 'prendre', 'temps', 'savoir',
        'devoir', 'année', 'même', 'aller', 'enfant', 'vouloir', 'grande', 'aussi',
        'autre', 'donner', 'faire', 'voir', 'demander', 'moment', 'trouver', 'rendre',
        'devenir', 'tenir', 'sembler', 'service', 'garder', 'rester', 'partir',
        'mettre', 'croire', 'parler', 'aimer', 'porter', 'pendant', 'contre',
        'commencer', 'arriver', 'servir', 'habiter', 'changer', 'répondre', 'utiliser'
      ]
    },
    spanish: {
      name: 'Español',
      words: [
        'el', 'la', 'de', 'que', 'y', 'a', 'en', 'un', 'ser', 'se', 'no', 'te', 'lo',
        'le', 'da', 'su', 'por', 'son', 'con', 'para', 'al', 'una', 'sur', 'del',
        'las', 'es', 'los', 'me', 'todo', 'pero', 'más', 'hacer', 'muy', 'puede',
        'querer', 'esta', 'tiempo', 'cada', 'saber', 'después', 'primero', 'durante',
        'hombre', 'tanto', 'mismo', 'hacer', 'mientras', 'nuevo', 'estado', 'mejor',
        'alguno', 'mucho', 'antes', 'lugar', 'bien', 'año', 'trabajo', 'nunca',
        'persona', 'ahora', 'último', 'hablar', 'llevar', 'escribir', 'dejar',
        'producir', 'presentar', 'crear', 'abrir', 'considerar', 'resultado',
        'leer', 'mes', 'causa', 'punto', 'programa', 'palabra', 'empezar'
      ]
    },
    german: {
      name: 'Deutsch',
      words: [
        'der', 'die', 'und', 'in', 'den', 'von', 'zu', 'das', 'mit', 'sich', 'des',
        'auf', 'für', 'ist', 'im', 'dem', 'nicht', 'ein', 'eine', 'als', 'auch',
        'es', 'an', 'werden', 'aus', 'er', 'hat', 'dass', 'sie', 'nach', 'wird',
        'bei', 'einer', 'um', 'am', 'sind', 'noch', 'wie', 'einem', 'über', 'einen',
        'so', 'zum', 'war', 'haben', 'nur', 'oder', 'aber', 'vor', 'zur', 'bis',
        'mehr', 'durch', 'man', 'sein', 'wurde', 'sei', 'in', 'wenn', 'können',
        'müssen', 'sollen', 'wollen', 'machen', 'gehen', 'kommen', 'sehen', 'lassen',
        'stehen', 'finden', 'bleiben', 'liegen', 'halten', 'nennen', 'mögen',
        'zeigen', 'führen', 'sprechen', 'bringen', 'leben', 'fahren', 'meinen'
      ]
    },
    dutch: {
      name: 'Nederlands',
      words: [
        'de', 'van', 'een', 'het', 'en', 'in', 'zijn', 'dat', 'te', 'op', 'voor',
        'met', 'als', 'aan', 'door', 'over', 'bij', 'uit', 'tot', 'er', 'maar',
        'om', 'onder', 'zo', 'naar', 'ook', 'dan', 'nog', 'wel', 'waar', 'niet',
        'hebben', 'worden', 'kunnen', 'zullen', 'moeten', 'gaan', 'komen', 'zien',
        'maken', 'krijgen', 'doen', 'geven', 'willen', 'staan', 'liggen', 'lopen',
        'zitten', 'houden', 'vinden', 'blijven', 'denken', 'nemen', 'weten',
        'brengen', 'voelen', 'werken', 'gebruiken', 'leven', 'zorgen', 'beginnen',
        'vertellen', 'proberen', 'laten', 'gebeuren', 'spelen', 'kijken', 'horen',
        'praten', 'betekenen', 'stoppen', 'helpen', 'schrijven', 'lezen'
      ]
    },
    italian: {
      name: 'Italiano',
      words: [
        'il', 'di', 'che', 'e', 'la', 'per', 'un', 'in', 'con', 'non', 'una', 'su',
        'le', 'si', 'da', 'al', 'del', 'lo', 'come', 'ma', 'se', 'ci', 'questo',
        'tutto', 'anche', 'lui', 'lei', 'più', 'molto', 'fare', 'dire', 'andare',
        'vedere', 'sapere', 'dare', 'volere', 'venire', 'dovere', 'potere', 'grande',
        'nuovo', 'primo', 'ultimo', 'buono', 'stesso', 'quanto', 'ogni', 'altro',
        'dove', 'quando', 'perché', 'mentre', 'sempre', 'mai', 'oggi', 'ieri',
        'domani', 'casa', 'tempo', 'persona', 'anno', 'mano', 'giorno', 'parte',
        'mondo', 'vita', 'caso', 'paese', 'problema', 'momento', 'numero', 'punto',
        'governo', 'bambino', 'lavoro', 'gruppo', 'parola', 'famiglia', 'fine'
      ]
    },
    portuguese: {
      name: 'Português',
      words: [
        'o', 'de', 'a', 'e', 'do', 'da', 'em', 'um', 'para', 'é', 'com', 'não',
        'uma', 'os', 'no', 'se', 'na', 'por', 'mais', 'as', 'dos', 'como', 'mas',
        'foi', 'ao', 'ele', 'das', 'tem', 'à', 'seu', 'sua', 'ou', 'ser', 'quando',
        'muito', 'há', 'nos', 'já', 'está', 'eu', 'também', 'só', 'pelo', 'pela',
        'até', 'isso', 'ela', 'entre', 'era', 'depois', 'sem', 'mesmo', 'aos',
        'ter', 'seus', 'suas', 'numa', 'pelos', 'pelas', 'esse', 'eles', 'estão',
        'você', 'tinha', 'foram', 'essa', 'num', 'nem', 'suas', 'meu', 'às',
        'minha', 'têm', 'numa', 'pelos', 'pelas', 'foi', 'contra', 'desde',
        'sobre', 'durante', 'antes', 'através', 'dentro', 'fora', 'junto'
      ]
    }
  };

  const generateRandomWords = (count, startWithLoremIpsum = false) => {
    const words = [];
    const currentWordBank = wordBanks[selectedLanguage].words;
    
    if (startWithLoremIpsum && count >= 2 && selectedLanguage === 'latin') {
      words.push('Lorem', 'ipsum');
      count -= 2;
    }
    
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * currentWordBank.length);
      words.push(currentWordBank[randomIndex]);
    }
    
    return words;
  };

  const generateParagraph = (wordCount, isFirst = false) => {
    const words = generateRandomWords(wordCount, isFirst && startWithLorem);
    let paragraph = words.join(' ');
    
    // Capitalize first letter
    paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1);
    
    // Add some random punctuation
    const sentences = [];
    let currentSentence = [];
    
    words.forEach((word, index) => {
      currentSentence.push(word);
      
      // Random chance to end sentence (but not too short)
      if (currentSentence.length >= 8 && Math.random() < 0.15) {
        sentences.push(currentSentence.join(' ') + '.');
        currentSentence = [];
      }
    });
    
    // Add remaining words as final sentence
    if (currentSentence.length > 0) {
      sentences.push(currentSentence.join(' ') + '.');
    }
    
    return sentences.join(' ').charAt(0).toUpperCase() + sentences.join(' ').slice(1);
  };

  const generateLoremIpsum = () => {
    const paragraphsArray = [];
    
    for (let i = 0; i < paragraphs; i++) {
      const paragraph = generateParagraph(wordsPerParagraph, i === 0);
      paragraphsArray.push(paragraph);
    }
    
    setGeneratedText(paragraphsArray.join('\n\n'));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const clearText = () => {
    setGeneratedText('');
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="40" height="40" rx="8" fill="#007bff"/>
               <path d="M12 14h16v2H12v-2zm0 4h16v2H12v-2zm0 4h12v2H12v-2z" fill="white"/>
             </svg>
             <span>LoremGen</span>
           </div>
          <nav className="nav-links">
            <a href="#generator">Generator</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="page-header">
          <h1>Lorem Ipsum Generator</h1>
          <p>Generate beautiful placeholder text for your designs and layouts</p>
          <div className="feature-badges">
            <span className="badge">Fast Generation</span>
            <span className="badge">Copy to Clipboard</span>
            <span className="badge">Customizable</span>
          </div>
        </div>

        <div className="controls">
          <div className="control-group">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {Object.entries(wordBanks).map(([key, bank]) => (
                <option key={key} value={key}>{bank.name}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="paragraphs">Paragraphs:</label>
            <input
              type="number"
              id="paragraphs"
              min="1"
              max="20"
              value={paragraphs}
              onChange={(e) => setParagraphs(parseInt(e.target.value) || 1)}
            />
          </div>

          <div className="control-group">
            <label htmlFor="words">Words per paragraph:</label>
            <input
              type="number"
              id="words"
              min="10"
              max="200"
              value={wordsPerParagraph}
              onChange={(e) => setWordsPerParagraph(parseInt(e.target.value) || 10)}
            />
          </div>

          {selectedLanguage === 'latin' && (
            <div className="control-group checkbox-group">
              <label htmlFor="startWithLorem">
                <input
                  type="checkbox"
                  id="startWithLorem"
                  checked={startWithLorem}
                  onChange={(e) => setStartWithLorem(e.target.checked)}
                />
                Start with "Lorem ipsum"
              </label>
            </div>
          )}

          <button className="generate-btn" onClick={generateLoremIpsum}>
            Generate Text
          </button>
        </div>

        {generatedText && (
          <div className="output-section">
            <div className="output-header">
              <h3>Generated Text</h3>
              <div className="output-actions">
                <button className="copy-btn" onClick={copyToClipboard}>
                  Copy to Clipboard
                </button>
                <button className="clear-btn" onClick={clearText}>
                  Clear
                </button>
              </div>
            </div>
            <div className="output-text">
              {generatedText.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
               <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect width="40" height="40" rx="8" fill="#007bff"/>
                 <path d="M12 14h16v2H12v-2zm0 4h16v2H12v-2zm0 4h12v2H12v-2z" fill="white"/>
               </svg>
               <span>LoremGen</span>
             </div>
            <p>The fastest and most elegant lorem ipsum generator for designers and developers.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#generator">Text Generator</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#api">API Docs</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 LoremGen. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#terms">Terms of Service</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;