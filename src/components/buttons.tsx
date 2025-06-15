import { motion } from "framer-motion";

export const PrimaryButton = ({ children, onClick, className, type }: { children: React.ReactNode; onClick?: () => void; className?: string; type?: "button" | "submit" | "reset" }) => {
    return (
        <motion.button
            onClick={onClick}
            type={type}
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium overflow-hidden group transition-all duration-300 border border-purple-500/20 shadow-lg shadow-purple-500/20 ${className}`}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">{children}</div>
        </motion.button>
    );
};

export const SecondaryButton = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative px-8 py-3 rounded-full bg-black/40 backdrop-blur-sm text-white font-medium overflow-hidden group transition-all duration-300 border border-white/10 shadow-lg shadow-black/20"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">{children}</div>
        </motion.button>
    );
};
