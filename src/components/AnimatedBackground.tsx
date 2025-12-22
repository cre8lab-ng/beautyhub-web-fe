import { motion } from "framer-motion";

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay,
    }}
  />
);

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingShape
        className="bg-pink-300 w-64 h-64 top-10 left-10"
        delay={0}
      />
      <FloatingShape
        className="bg-purple-300 w-96 h-96 bottom-20 right-10"
        delay={2}
      />
      <FloatingShape
        className="bg-yellow-200 w-48 h-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        delay={1}
      />
    </div>
  );
};

export default AnimatedBackground;
