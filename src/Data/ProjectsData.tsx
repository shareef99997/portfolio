import { Project } from '../Types/Types';
import powerbiIcon from '../Assets/power_bi_icon.svg';
import sqlIcon from '../Assets/sql.svg';
import pythonIcon from '../Assets/python.svg';
import excelIcon from '../Assets/excel.svg';
import codeIcon from '../Assets/programming.svg';
import globalElectronicsSc1 from '../Assets/Projects/Global Electronics/Sales Performance.png';
import globalElectronicsSc2 from '../Assets/Projects/Global Electronics/customer demograpghy.png';
import globalElectronicsSc3 from '../Assets/Projects/Global Electronics/data model.png';
import globalElectronicsSc4 from '../Assets/Projects/Global Electronics/order & delivery.png';
import globalElectronicsSc5 from '../Assets/Projects/Global Electronics/overview.png';
import globalElectronicsSc6 from '../Assets/Projects/Global Electronics/store performance.png';

export const categories = [
    { name: "All", icon: codeIcon },
    { name: "Power BI", icon: powerbiIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Excel", icon: excelIcon },
    { name: "Software Development", icon: codeIcon }
];

export const projects: Project[] = [
    {
        id: "1",
        title: "Global Electronics Sales Performance",
        description: "Interactive Power BI dashboard for sales performance analysis Interactive Power BI dashboard for sales performance analysis Interactive Power BI dashboard for sales performance analysis ",
        longDescription: "A comprehensive business intelligence solution that transforms sales data into actionable insights. Features real-time data processing, custom visualizations, and automated reporting.",
        image: globalElectronicsSc1,
        screenshots: [
            globalElectronicsSc1,
            globalElectronicsSc2,
            globalElectronicsSc3,
            globalElectronicsSc4,
            globalElectronicsSc5,
            globalElectronicsSc6,
        ],
        category: "Power BI",
        categoryIcon: powerbiIcon,
        technologies: ["Power BI", "DAX", "SQL", "Excel"],
        features: [
            "Real-time sales data processing and visualization",
            "Custom KPI tracking and alerts",
            "Automated report generation",
            "Interactive drill-down capabilities"
        ],
        impact: [
            "Identified key sales trends and patterns across different regions",
            "Discovered correlation between customer demographics and purchase behavior",
            "Uncovered opportunities for inventory optimization based on seasonal patterns"
        ],
        completionDate: "March 2024",
        githubUrl: "https://github.com/yourusername/sales-analytics"
    },
    
    {
        id: "2",
        title: "Customer Analytics Platform",
        description: "Advanced SQL-based analytics platform for customer behavior analysis",
        longDescription: "A complete analytics platform built with SQL and Python, featuring real-time data processing, customer segmentation, and predictive analytics capabilities.",
        image: globalElectronicsSc1,
        screenshots: [
            globalElectronicsSc1,
            globalElectronicsSc2,
            globalElectronicsSc3,
            globalElectronicsSc4,
            globalElectronicsSc5,
            globalElectronicsSc6,
        ],
        category: "SQL",
        categoryIcon: sqlIcon,
        technologies: ["SQL", "Python", "Pandas", "Machine Learning"],
        githubUrl: "https://github.com/yourusername/customer-analytics",
        features: [
            "Real-time customer behavior tracking",
            "Predictive analytics models",
            "Customer segmentation",
            "Custom reporting dashboard"
        ],
        impact: [
            "Identified distinct customer segments with unique purchasing patterns",
            "Predicted customer churn with 85% accuracy",
            "Discovered key factors influencing customer loyalty"
        ],
        completionDate: "February 2024"
    },

    {
        id: "3",
        title: "Financial Analysis Tool",
        description: "Excel-based financial modeling and analysis tool",
        longDescription: "A comprehensive Excel-based financial analysis tool that helps organizations make data-driven decisions through advanced modeling, reporting, and visualization capabilities.",
        image: globalElectronicsSc1,
        screenshots: [
            globalElectronicsSc1,
            globalElectronicsSc2,
            globalElectronicsSc3,
            globalElectronicsSc4,
            globalElectronicsSc5,
            globalElectronicsSc6,
        ],
        category: "Excel",
        categoryIcon: excelIcon,
        technologies: ["Excel", "VBA", "Power Query", "Power Pivot"],
        githubUrl: "https://github.com/yourusername/financial-analysis",
        features: [
            "Advanced financial modeling",
            "Automated data processing",
            "Custom reporting templates",
            "Interactive dashboards"
        ],
        impact: [
            "Identified cost optimization opportunities in operational expenses",
            "Discovered seasonal patterns in revenue streams",
            "Uncovered correlations between marketing spend and revenue growth"
        ],
        completionDate: "January 2024"
    },

    {
        id: "4",
        title: "Data Analysis Automation",
        description: "Python-based data analysis and automation platform",
        longDescription: "A comprehensive Python-based platform that automates data analysis workflows, featuring advanced analytics, machine learning models, and automated reporting capabilities.",
        image: globalElectronicsSc1,
        screenshots: [
            globalElectronicsSc1,
            globalElectronicsSc2,
            globalElectronicsSc3,
            globalElectronicsSc4,
            globalElectronicsSc5,
            globalElectronicsSc6,
        ],
        category: "Python",
        categoryIcon: pythonIcon,
        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        githubUrl: "https://github.com/yourusername/data-analysis",
        features: [
            "Automated data processing",
            "Machine learning models",
            "Custom visualization library",
            "API integration"
        ],
        impact: [
            "Identified data quality issues and implemented automated validation",
            "Discovered patterns in data processing bottlenecks",
            "Uncovered opportunities for process optimization"
        ],
        completionDate: "December 2023"
    }
]; 