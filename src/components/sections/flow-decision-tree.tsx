'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DecisionOption {
  text: string;
  result: string;
}

interface DecisionStep {
  question: string;
  options: DecisionOption[];
}

export interface FlowDecisionTreeProps {
  steps: DecisionStep[];
  className?: string;
}

const MotionPath = motion.path;
const MotionDiv = motion.div;
const MotionCircle = motion.circle;

export function FlowDecisionTree({ steps }: FlowDecisionTreeProps) {
  return (
    <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6">
      {steps.map((step, stepIndex) => (
        <div key={stepIndex} className="mb-24 last:mb-0 md:mb-32">
          {/* Question Node */}
          <div className="relative flex justify-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stepIndex * 0.3 }}
              className="relative"
            >
              <div className="bg-card relative flex min-w-[280px] items-center gap-3 rounded-lg border px-4 py-3 md:min-w-[300px] md:gap-4 md:px-6 md:py-4">
                <span className="text-muted-foreground font-mono text-sm">
                  {stepIndex + 1}
                </span>
                <h3 className="text-base font-bold md:text-lg">
                  {step.question}
                </h3>
              </div>
            </MotionDiv>
          </div>

          {/* Connection System */}
          <div className="relative mt-16 md:mt-20">
            {/* SVG Container with Precise Positioning */}
            <div className="absolute inset-x-0 top-[-64px] h-[calc(100%+64px)]">
              <svg
                className="h-full w-full"
                viewBox="0 0 1000 160"
                fill="none"
                preserveAspectRatio="xMidYMin slice"
              >
                {/* Vertical Line from Question */}
                <MotionPath
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: stepIndex * 0.3 + 0.2, duration: 0.3 }}
                  d="M500 0 L500 40"
                  className="stroke-border"
                  strokeWidth="2"
                />

                {/* Connection Circle */}
                <MotionCircle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: stepIndex * 0.3 + 0.4 }}
                  cx="500"
                  cy="40"
                  r="4"
                  className="fill-background stroke-border"
                  strokeWidth="2"
                />

                {/* Horizontal Connection */}
                <MotionPath
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: stepIndex * 0.3 + 0.5, duration: 0.4 }}
                  d="M200 40 L800 40"
                  className="stroke-border"
                  strokeWidth="2"
                />

                {/* Vertical Lines to Cards */}
                <MotionPath
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: stepIndex * 0.3 + 0.7, duration: 0.3 }}
                  d={`
                    M 200 40 L 200 100
                    M 800 40 L 800 100
                  `}
                  className="stroke-border"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Options Container */}
            <div className="relative flex justify-center gap-[4%] pt-8 md:gap-[10%]">
              {step.options.map((option, optionIndex) => (
                <MotionDiv
                  key={optionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stepIndex * 0.3 + 0.8 }}
                  className="relative w-[48%] max-w-[500px] md:w-[45%]"
                >
                  {/* Branch Label */}
                  <div
                    className={cn(
                      'absolute top-[-2.5rem] left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-sm font-medium md:px-4 md:py-1 md:text-base',
                      optionIndex === 0
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300'
                        : 'bg-rose-50 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300',
                    )}
                  >
                    {option.text}
                  </div>

                  {/* Result Card */}
                  <div className="bg-card/50 dark:bg-card/40 w-full rounded-lg border px-4 py-3 md:px-6 md:py-4">
                    <p className="text-foreground text-center text-sm md:text-base">
                      {option.result}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
