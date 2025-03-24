import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    icon: LucideIcon;
    className?: string;
}

function SectionHeader({ title, icon: Icon, className = "" }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 w-fit ${className}`}
        >
            <Icon className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">{title}</span>
        </motion.div>
    );
}

export default SectionHeader; 