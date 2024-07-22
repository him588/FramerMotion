import Image from "next/image";
import React from "react";
// import { MotionValue } from "framer-motion";
import { MotionValue, useTransform, motion } from "framer-motion";

function Section2({ motionValue }: { motionValue: MotionValue }) {
  const scale = useTransform(motionValue, [0, 1], [0.8, 1]);
  const rotate = useTransform(motionValue, [0, 1], [-5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className=" h-[100vh] w-full bg-green-400 relative"
    >
      <Image
        src={
          "https://images.unsplash.com/photo-1516249181155-bbf89a130f77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zJTIwaW4lMjBuaWdodHxlbnwwfDB8MHx8fDA%3D"
        }
        alt=""
        width={0}
        height={0}
        className="h-full w-full"
        // placeholder="blur"
        blurDataURL=""
        // fill
        unoptimized
      />
    </motion.div>
  );
}

export default Section2;
