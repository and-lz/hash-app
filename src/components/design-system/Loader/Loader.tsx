import React, { useEffect, useState } from 'react'
import { LoadBar } from './Loader.styles'

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

  return <LoadBar size={progress} />
}

export default Loader
