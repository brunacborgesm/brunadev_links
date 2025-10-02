import type { ComponentType, ReactNode } from "react";
import { SvgIconProps } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebsiteIcon from "@mui/icons-material/LanguageOutlined";

export type Variant = "instagram" | "linkedin" | "website" | "github";

type VariantConfig = {
  Icon: ComponentType<SvgIconProps>;
  className?: string;
  ariaLabel: string;
};

export const VARIANTS = {
  instagram: {
    Icon: InstagramIcon,
    ariaLabel: "Abrir Instagram",
  },
  linkedin: {
    Icon: LinkedInIcon,
    ariaLabel: "Abrir LinkedIn de Bruna Borges",
  },
  github: {
    Icon: GitHubIcon,
    ariaLabel: "Abrir GitHub de Bruna Borges",
  },
  website: {
    Icon: WebsiteIcon,
    ariaLabel: "Abrir Website de Bruna Borges",
  },
} as const satisfies Record<Variant, VariantConfig>;
