import { MenuItemContract } from '@contracts/menu-item-contract';
import { AppIcons } from '@constants/app-icons';
import { AppFullRoutes } from '@constants/app-full-routes';
import { MenuIdes } from '@enums/menu-ides';

export const Menus: MenuItemContract[] = [
  {
    id: MenuIdes.ADMINISTRATION,
    langKey: 'menu_administration',
    icon: AppIcons.SETTINGS,
    path: AppFullRoutes.ADMINISTRATION,
  },
  {
    id: MenuIdes.LOCALIZATION,
    langKey: 'menu_localization',
    icon: AppIcons.TRANSLATE,
    path: AppFullRoutes.LOCALIZATION,
    parent: MenuIdes.ADMINISTRATION,
  },
  {
    id: MenuIdes.JOB_TITLE,
    langKey: 'menu_job_title',
    icon: AppIcons.JOB_TITLE,
    path: AppFullRoutes.JOB_TITLE,
    parent: MenuIdes.ADMINISTRATION,
  },
];
