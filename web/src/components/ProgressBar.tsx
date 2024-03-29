interface ProgressBarProps {
  progress: number
}

export function ProgressBar({progress}: ProgressBarProps) {
  return (
    <div className="h3 rounded-xl bg-zinc-700 w-full mt-4">
            <div role='progressbar' aria-label='Progresso de habitos completados neste dia' aria-valuenow={progress} className='h-3 rounded-xl bg-violet-600' style={{width: `${progress}%`}}/>
          </div>
  )
}