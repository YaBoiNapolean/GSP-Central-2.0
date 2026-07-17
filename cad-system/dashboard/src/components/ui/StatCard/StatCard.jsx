import "./StatCard.css";
import { motion } from "framer-motion";

export default function StatCard({
    title,
    value,
    icon: Icon,
    color = "var(--primary)",
}) {
    return (
        <motion.div
            whileHover={{
                y: -4,
                scale: 1.02,
            }}
            transition={{
                duration: 0.2,
            }}
            className="statCard"
        >
            <div
                className="statIcon"
                style={{ background: color }}
            >
                <Icon size={22} />
            </div>

            <div className="statInfo">
                <span>{title}</span>

                <h2>{value}</h2>
            </div>
        </motion.div>
    );
}