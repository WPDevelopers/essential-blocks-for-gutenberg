import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";

import { HomeIcon, BlocksIcon, TemplatesIcon, OptionsIcon, IntegrationsIcon } from "./icons";
import {
    TabGeneral,
    Blocks,
    TabTemplates,
    TabOptions,
    TabIntegrations
} from "./components";

const tabMenus = applyFilters('essential_blocks_settings_menu_list', [
    {
        id: 'general',
        icon: <HomeIcon />,
        label: __("Dashboard", "essential-blocks"),
        comp: <TabGeneral />

    },
    {
        id: 'blocks',
        icon: <BlocksIcon />,
        label: __("Blocks", "essential-blocks"),
        comp: <Blocks />
    },
    {
        id: 'templates',
        icon: <TemplatesIcon />,
        label: __("Templates", "essential-blocks"),
        comp: <TabTemplates />
    },
    {
        id: 'options',
        icon: <OptionsIcon />,
        label: __("Settings", "essential-blocks"),
        comp: <TabOptions />
    },
    {
        id: 'integrations',
        icon: <IntegrationsIcon />,
        label: __("Integrations", "essential-blocks"),
        comp: <TabIntegrations />
    },
]);

export default tabMenus;
