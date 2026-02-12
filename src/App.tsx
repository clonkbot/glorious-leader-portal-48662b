import { useState, useEffect } from 'react';

function App() {
  const [visitorCount, setVisitorCount] = useState(88888888);
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlogan, setCurrentSlogan] = useState(0);

  const slogans = [
    "GLORIOUS LEADER WELCOMES YOU",
    "PROSPERITY THROUGH UNITY",
    "THE SUN OF THE 21ST CENTURY",
    "ETERNAL GLORY TO THE NATION",
    "STRENGTH IN HARMONY"
  ];

  const achievements = [
    { number: "100%", label: "Citizen Happiness Index", icon: "★" },
    { number: "∞", label: "Years of Prosperity Ahead", icon: "◆" },
    { number: "1", label: "Supreme Leader Needed", icon: "☆" },
    { number: "0", label: "Problems in Paradise", icon: "●" }
  ];

  const news = [
    { title: "Supreme Leader Invents New Type of Weather", date: "Today" },
    { title: "National Unity Reaches Historic 200%", date: "Yesterday" },
    { title: "Dear Leader Scores 18 Holes-in-One", date: "This Week" },
    { title: "Scientists Confirm Leader is Best at Science", date: "Always" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 100));
    }, 100);

    const sloganInterval = setInterval(() => {
      setCurrentSlogan(prev => (prev + 1) % slogans.length);
    }, 3000);

    const popupTimer = setTimeout(() => setShowPopup(true), 2000);

    return () => {
      clearInterval(interval);
      clearInterval(sloganInterval);
      clearTimeout(popupTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1a0a0a] text-[#ffd700] overflow-x-hidden relative">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#ff0000] text-[200px] font-bold animate-pulse"
              style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 25}%`,
                animationDelay: `${i * 0.2}s`,
                transform: 'rotate(-15deg)'
              }}
            >
              ★
            </div>
          ))}
        </div>
        {/* Sunburst rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vh] -translate-y-1/2">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[5px] h-[150vh] origin-bottom"
              style={{
                transform: `rotate(${i * 15}deg)`,
                background: 'linear-gradient(to top, transparent, rgba(255,0,0,0.1))'
              }}
            />
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fadeIn">
          <div className="bg-gradient-to-br from-[#8b0000] to-[#4a0000] border-4 border-[#ffd700] p-6 md:p-8 max-w-md w-full text-center relative shadow-2xl">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#ffd700] text-[#8b0000] px-4 py-1 font-bold text-sm tracking-widest">
              IMPORTANT NOTICE
            </div>
            <div className="text-6xl mb-4 animate-bounce">⚠️</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#ffd700]">
              CONGRATULATIONS!
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed text-sm md:text-base">
              You have been randomly selected to receive the Supreme Leader's blessing!
              Your IP address has been logged for future appreciation.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#ffd700] text-[#8b0000] px-8 py-3 font-bold tracking-wider hover:bg-white transition-colors text-sm md:text-base min-h-[44px]"
            >
              I AM GRATEFUL
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 border-b-4 border-[#ffd700] bg-gradient-to-r from-[#8b0000] via-[#cc0000] to-[#8b0000]">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="text-2xl md:text-4xl">☭</div>
              <div className="text-center md:text-left">
                <h1 className="text-base md:text-xl font-black tracking-[0.2em] md:tracking-[0.3em]">DEMOCRATIC PEOPLE'S</h1>
                <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] opacity-80">OFFICIAL WEB PORTAL v1.0</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
              <span className="animate-pulse">●</span>
              <span className="tracking-widest">{visitorCount.toLocaleString()} LOYAL VISITORS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Scrolling Banner */}
      <div className="bg-[#ffd700] text-[#8b0000] py-2 overflow-hidden relative z-10">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 font-bold tracking-wider text-sm md:text-base">
              ★ BREAKING: SUPREME LEADER DOES ANOTHER AMAZING THING ★
              CITIZENS REPORT UNPRECEDENTED JOY ★
              WEATHER REMAINS PERFECT AS PROMISED ★
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          {/* Portrait Frame */}
          <div className="relative inline-block mb-8 md:mb-12">
            <div className="w-40 h-40 md:w-64 md:h-64 mx-auto border-8 border-[#ffd700] bg-gradient-to-br from-[#8b0000] to-[#4a0000] relative overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.3)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl md:text-9xl">👤</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 border-t-4 border-l-4 border-[#ffd700]" />
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 border-t-4 border-r-4 border-[#ffd700]" />
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 border-b-4 border-l-4 border-[#ffd700]" />
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 border-b-4 border-r-4 border-[#ffd700]" />
            {/* Stars */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl md:text-4xl text-[#ffd700] animate-pulse">★</div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 tracking-tight leading-none">
            <span className="text-[#ff4444]">KIM</span>{' '}
            <span className="text-[#ffd700]">JONG-UN</span>
          </h2>

          {/* Rotating Slogan */}
          <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden">
            <p
              key={currentSlogan}
              className="text-lg md:text-2xl lg:text-3xl tracking-[0.2em] md:tracking-[0.3em] text-white/80 animate-slideUp"
            >
              {slogans[currentSlogan]}
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 md:gap-4 my-6 md:my-8">
            <div className="w-16 md:w-32 h-[2px] bg-gradient-to-r from-transparent to-[#ffd700]" />
            <span className="text-xl md:text-2xl">☆</span>
            <div className="w-16 md:w-32 h-[2px] bg-gradient-to-l from-transparent to-[#ffd700]" />
          </div>

          {/* Titles */}
          <div className="space-y-1 md:space-y-2 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-white/60">
            <p>SUPREME LEADER OF THE DEMOCRATIC PEOPLE'S REPUBLIC</p>
            <p>CHAIRMAN OF THE STATE AFFAIRS COMMISSION</p>
            <p>MARSHAL OF THE REPUBLIC</p>
            <p>WORLD'S GREATEST GOLFER (SELF-CERTIFIED)</p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="relative z-10 py-12 md:py-16 px-4 bg-gradient-to-b from-transparent via-[#8b0000]/30 to-transparent">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="text-center p-4 md:p-6 border-2 border-[#ffd700]/30 bg-black/30 hover:border-[#ffd700] hover:bg-[#8b0000]/30 transition-all duration-300 group"
              >
                <div className="text-2xl md:text-4xl mb-2 group-hover:scale-125 transition-transform">{item.icon}</div>
                <div className="text-3xl md:text-5xl font-black text-[#ffd700] mb-2">{item.number}</div>
                <div className="text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] text-white/60 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black text-center mb-8 md:mb-12 tracking-[0.1em] md:tracking-[0.2em]">
            <span className="text-[#ff4444]">STATE</span> NEWS
          </h3>

          <div className="space-y-3 md:space-y-4">
            {news.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 border-l-4 border-[#ffd700] bg-gradient-to-r from-[#8b0000]/40 to-transparent hover:from-[#8b0000]/60 transition-all cursor-pointer group gap-2 sm:gap-0"
              >
                <div className="flex items-start sm:items-center gap-3 md:gap-4">
                  <span className="text-lg md:text-2xl group-hover:animate-spin">★</span>
                  <span className="text-sm md:text-lg font-bold tracking-wide leading-tight">{item.title}</span>
                </div>
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/40 ml-7 sm:ml-0">{item.date}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <button className="border-2 border-[#ffd700] px-6 md:px-8 py-3 md:py-4 font-bold tracking-[0.2em] hover:bg-[#ffd700] hover:text-[#8b0000] transition-all text-sm md:text-base min-h-[44px]">
              READ MORE TRUTHS
            </button>
          </div>
        </div>
      </section>

      {/* Propaganda Poster Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 bg-gradient-to-b from-[#8b0000]/50 to-transparent overflow-hidden">
        <div className="container mx-auto text-center relative">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-[20vw] font-black">GLORY</span>
          </div>

          <div className="relative">
            <div className="text-6xl md:text-9xl mb-4 md:mb-6">🚀</div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
              <span className="text-[#ffd700]">FORWARD</span><br/>
              <span className="text-[#ff4444]">TO VICTORY!</span>
            </h3>
            <p className="text-base md:text-xl tracking-[0.1em] md:tracking-[0.2em] text-white/60 max-w-2xl mx-auto leading-relaxed px-4">
              Under the wise guidance of our Supreme Leader,
              the nation marches forward to unprecedented glory and
              definitely real achievements!
            </p>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <button className="bg-[#ffd700] text-[#8b0000] px-6 md:px-8 py-3 md:py-4 font-black tracking-[0.1em] md:tracking-[0.2em] hover:bg-white transition-colors text-sm md:text-base min-h-[44px]">
                PLEDGE ALLEGIANCE
              </button>
              <button className="border-2 border-[#ffd700] px-6 md:px-8 py-3 md:py-4 font-bold tracking-[0.1em] md:tracking-[0.2em] hover:bg-[#ffd700]/20 transition-colors text-sm md:text-base min-h-[44px]">
                REPORT NEIGHBOR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Wisdom */}
      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="border-4 border-[#ffd700] p-6 md:p-12 bg-gradient-to-br from-[#4a0000] to-[#1a0000] relative">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-[#1a0a0a] px-4 md:px-6">
              <span className="text-sm md:text-lg tracking-[0.3em] md:tracking-[0.5em] text-[#ffd700]">DAILY WISDOM</span>
            </div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-center italic leading-relaxed">
              "Let us all work harder to make our nation stronger,
              and remember that any criticism is just jealousy from
              less glorious nations."
            </blockquote>
            <p className="text-right mt-4 md:mt-6 text-sm md:text-base tracking-[0.2em] text-[#ffd700]">
              — SUPREME LEADER, probably
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t-4 border-[#ffd700] bg-gradient-to-b from-[#8b0000]/50 to-black mt-8 md:mt-16">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center">
            <div className="text-4xl md:text-6xl mb-4">☭</div>
            <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-white/40 mb-2">
              © ETERNAL — DEMOCRATIC PEOPLE'S WEB PORTAL
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] text-white/20 mb-6 md:mb-8">
              (This website is definitely not monitored)
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs tracking-widest text-white/30">
              <span className="hover:text-[#ffd700] cursor-pointer transition-colors py-2">PRIVACY POLICY (LOL)</span>
              <span className="hover:text-[#ffd700] cursor-pointer transition-colors py-2">TERMS OF OBEDIENCE</span>
              <span className="hover:text-[#ffd700] cursor-pointer transition-colors py-2">CONTACT (WE CONTACT YOU)</span>
            </div>

            {/* Attribution Footer */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
              <p className="text-[10px] md:text-xs text-white/30 tracking-wider">
                Requested by @JolupCCTV · Built by @clonkbot
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed bottom-4 right-4 z-40 hidden md:block">
        <button className="bg-[#ffd700] text-[#8b0000] w-12 h-12 md:w-16 md:h-16 rounded-full font-bold text-xl md:text-2xl shadow-lg hover:scale-110 transition-transform animate-bounce min-w-[44px] min-h-[44px]">
          ☆
        </button>
      </div>
    </div>
  );
}

export default App;