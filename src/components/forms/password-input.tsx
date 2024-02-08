import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import { Input, InputProps } from '@/components/ui/input'

import { Icons } from '../icons'

interface PasswordInputProps extends InputProps {
  rootClassname?: string
  buttonClassname?: string
}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className, rootClassname, buttonClassname, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={cn('relative', rootClassname)}>
      <Input
        type={showPassword ? 'text' : 'password'}
        className={className}
        {...props}
        ref={ref}
      />
      <button
        type="button"
        className={cn(
          'absolute right-2 top-1 rounded-md p-1.5 hover:bg-muted-foreground dark:hover:bg-secondary',
          buttonClassname
        )}
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? (
          <Icons.eye className="h-[14px] w-[14px] stroke-[1px]" />
        ) : (
          <Icons.eyeOff className="h-[14px] w-[14px] stroke-[1px]" />
        )}
      </button>
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'
