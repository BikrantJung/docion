"use client"

import React from "react"
import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

import { Icons } from "../icons"

export const SocialButtons = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        startIcon={<Icons.github className="icon-sm" />}
        className="w-full"
        variant="outline"
      />
      <Button
        startIcon={<Icons.google className="icon-sm" />}
        className="w-full"
        variant="outline"
      />
    </div>
  )
}
