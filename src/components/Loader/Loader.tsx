import React, { useEffect, useState } from 'react'
import { LoadBar } from 'design-system/Loader/Loader'

interface LoaderProps {
  size: number
}

function Loader({ size }: LoaderProps) {
  const [progress, setProgress] = useState(size)

  useEffect(() => {
    setProgress(size)

    if (size === 100) {
      setTimeout(() => {
        setProgress(0)
      }, 1000)
    }
  }, [size])

  useEffect(() => {
    if (progress === 0 || progress === 100) {
      document.body.style.cursor = 'auto'
    } else {
      document.body.style.cursor = 'wait'
    }
  }, [progress])

  return <LoadBar size={progress} />
}

export default Loader
