import React from "react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CardWrapperProps {
  Header: JSX.Element
  Content: JSX.Element
  Footer?: JSX.Element
}
/**
 * A card wrapper component for sign in, login, password reset,
 *
 * and other auth components
 *
 */
export const CardWrapper: React.FC<CardWrapperProps> = ({
  Header,
  Footer,
  Content,
}) => {
  return (
    <Card>
      <CardHeader>{Header}</CardHeader>
      <CardContent>{Content}</CardContent>
      <CardFooter>{Footer}</CardFooter>
    </Card>
  )
}
