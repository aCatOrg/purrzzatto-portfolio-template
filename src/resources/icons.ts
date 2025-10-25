import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiMiniPresentationChartLine
} from "react-icons/hi2";

import { TbBrandCSharp, TbBrandPowershell, TbSql } from "react-icons/tb";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";


import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiSqlalchemy,
  SiPandas,
  SiFlask,
  SiGnubash,
  SiSplunk,
  SiGrafana,
  SiKibana,
  SiDatabricks
} from "react-icons/si";

import { FaUsers, FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, FaCat, FaGamepad, FaJava, FaPython, FaReact} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  cat: FaCat,
  gamepad: FaGamepad,
  java: FaJava,
  python: FaPython,
  sqlalchemy: SiSqlalchemy,
  pandas: SiPandas,
  flask: SiFlask,
  react: FaReact,
  csharp: TbBrandCSharp,
  bash: SiGnubash,
  powershell: TbBrandPowershell,
  sql: TbSql,
  splunk: SiSplunk,
  grafana: SiGrafana,
  kibana: SiKibana, 
  databricks: SiDatabricks,
  presentation: HiMiniPresentationChartLine,
  users: FaUsers,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
