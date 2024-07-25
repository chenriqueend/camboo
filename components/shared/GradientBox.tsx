import React from 'react'
import styles from './GradientBox.module.css';
import { cn } from "@/lib/utils";

type GradientBoxProps = {
  className?: string,
  children: React.ReactNode
}

export default function GradientBox(props: GradientBoxProps) {
  return (
    <div>
      <div className={cn(
        styles['custom-bg'],
        props.className
      )}>
        {props.children}
      </div>
    </div>

  )
}
