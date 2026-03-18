import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface HeaderProps {
    title: string;
    shouldShowLoginButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
    title,
    shouldShowLoginButton = false,
}): React.ReactElement => {

    const headerBaseClasses: string = "border-b border-gray-800 px-6 py-4";
    const divBaseClasses: string = "max-w-7xl mx-auto flex items-center justify-between";
    const titleBaseClasses: string = "text-xl font-bold text-indigo-400 tracking-tight";

    return (
        <header className={headerBaseClasses}>
            <div className={divBaseClasses}>
                <h1 className={titleBaseClasses}>{title}</h1>
                {shouldShowLoginButton && (
                    <Link to="/login">
                        <Button variant="secondary">Iniciar sesión</Button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
