import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface Props {
  from: number;
  to: number;
}

const Counter = ({ from, to }: Props) => {
  const elRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = elRef.current;
    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        if (el) {
          el.textContent = value.toFixed(0);
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <p
      className="text-main text-[40px] font-bold border-l-4 border-main pl-2"
      ref={elRef}
    />
  );
};

export default Counter;
