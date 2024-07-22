import Image from "next/image";
import React from "react";
import { MotionValue, useTransform, motion } from "framer-motion";

function Section1({ motionValue }: { motionValue: MotionValue }) {
  const scale = useTransform(motionValue, [0, 1], [1, 0.8]);
  const rotate = useTransform(motionValue, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className=" bg-[#0d0d36] sticky top-0 h-[100vh] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]  "
    >
      <p>Scroll Perspective</p>
      <div className=" flex gap-4">
        <p>Section</p>
        <div className=" relative w-[12.5vw]">
          <Image
            width={0}
            height={0}
            className=" w-full h-[100px]"
            src={
              "https://images.unsplash.com/photo-1636763129498-38c87434acc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhbmQlMjBzY2FwZXxlbnwwfDB8MHx8fDA%3D"
            }
            unoptimized
            alt=""
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
}

export default Section1;
