"use client";

import { useState, useEffect, useRef, type FC, type ReactNode } from "react";

export const Section: FC<{ children: (visible: boolean) => ReactNode }> = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry?.isIntersecting) {
              setVisible(true);
            }
          }, { threshold: 0.5 });

        if (sectionRef.current) { observer.observe(sectionRef.current) }

        return () => {if (sectionRef.current) { observer.unobserve(sectionRef.current) }};
    }, []);

    return (
        <div ref={sectionRef}>
            {children(visible)}
        </div>
    );
};