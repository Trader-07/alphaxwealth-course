const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/3 right-1/4 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-primary/3 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-2/3 left-1/3 w-[250px] h-[250px] bg-primary/4 rounded-full blur-3xl opacity-15 hidden md:block" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;