import {
  IconBrandGithub,
  IconBrandGoogleFilled,
  IconCommand,
  IconLoader2,
  IconMoon,
  IconSun,
} from "@tabler/icons-react"

export type IconKeys = keyof typeof icons

// This ensures auto-completion for props.
type IconProps<T extends React.ElementType> = React.ComponentProps<T>
type IconsType = {
  [key in IconKeys]: React.ComponentType<IconProps<(typeof icons)[key]>>
}

const icons = {
  logo: IconCommand,
  sun: IconSun,
  moon: IconMoon,
  loader: IconLoader2,
  github: IconBrandGithub,
  google: IconBrandGoogleFilled,
}

export const Icons: IconsType = icons
