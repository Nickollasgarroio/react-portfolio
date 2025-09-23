import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { LogoNickollas } from "@/assets/svg/logoNickollas";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <LogoNickollas className="text-custom-violet-400 hover:text-custom-violet-400 dark:hover:text-custom-violet-300 transition-colors duration-200" />
            {/* <p className="font-bold text-custom-violet-800 hover:text-custom-violet-400 dark:hover:text-custom-violet-300">
              Nickollas G.
            </p> */}
          </Link>
        </NavbarBrand>
        <div className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-custom-violet-400 dark:hover:text-custom-violet-300 transition-colors duration-200",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2 ">
          <Link isExternal href={siteConfig.links.whatsapp} title="WhatsApp">
            <BsWhatsapp className="text-default-500 size-5 hover:text-custom-violet-400 dark:hover:text-custom-violet-300 transition-colors duration-200" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedIn} title="LinkedIn">
            <FaLinkedin className="text-default-500 size-5 hover:text-custom-violet-400 dark:hover:text-custom-violet-300 transition-colors duration-200" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <FaGithub className="text-default-500 size-5 hover:text-custom-violet-400 dark:hover:text-custom-violet-300 transition-colors duration-200" />
          </Link>
          <Link isExternal href={siteConfig.links.email} title="Email">
            <BiLogoGmail className="text-default-500 size-6 hover:text-custom-violet-400 dark:hover:text-custom-violet-300 transition-colors duration-200" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
