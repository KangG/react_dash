import React from 'react';

const Toaster = React.lazy(() => import('samples/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('samples/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('samples/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('samples/base/cards/Cards'));
const Carousels = React.lazy(() => import('samples/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('samples/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('samples/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('samples/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('samples/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('samples/base/navbars/Navbars'));
const Navs = React.lazy(() => import('samples/base/navs/Navs'));
const Paginations = React.lazy(() => import('samples/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('samples/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('samples/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('samples/base/switches/Switches'));

const Tabs = React.lazy(() => import('samples/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('samples/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('samples/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('samples/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('samples/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('samples/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('samples/charts/Charts'));
const Dashboard = React.lazy(() => import('samples/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('samples/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('samples/icons/flags/Flags'));
const Brands = React.lazy(() => import('samples/icons/brands/Brands'));
const Alerts = React.lazy(() => import('samples/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('samples/notifications/badges/Badges'));
const Modals = React.lazy(() => import('samples/notifications/modals/Modals'));
const Colors = React.lazy(() => import('samples/theme/colors/Colors'));
const Typography = React.lazy(() => import('samples/theme/typography/Typography'));
const Widgets = React.lazy(() => import('samples/widgets/Widgets'));
const Users = React.lazy(() => import('samples/users/Users'));
const User = React.lazy(() => import('samples/users/User'));

const routes = [
  { path: '/sample/', exact: true, name: 'Home' },
  { path: '/sample/home', name: 'Home', component: Dashboard },
  { path: '/sample/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/sample/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/sample/theme/colors', name: 'Colors', component: Colors },
  { path: '/sample/theme/typography', name: 'Typography', component: Typography },
  { path: '/sample/base', name: 'Base', component: Cards, exact: true },
  { path: '/sample/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/sample/base/cards', name: 'Cards', component: Cards },
  { path: '/sample/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/sample/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/sample/base/forms', name: 'Forms', component: BasicForms },
  { path: '/sample/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/sample/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/sample/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/sample/base/navs', name: 'Navs', component: Navs },
  { path: '/sample/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/sample/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/sample/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/sample/base/switches', name: 'Switches', component: Switches },
  { path: '/sample/base/tables', name: 'Tables', component: Tables },
  { path: '/sample/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/sample/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/sample/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/sample/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/sample/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/sample/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/sample/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/sample/charts', name: 'Charts', component: Charts },
  { path: '/sample/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/sample/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/sample/icons/flags', name: 'Flags', component: Flags },
  { path: '/sample/icons/brands', name: 'Brands', component: Brands },
  { path: '/sample/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/sample/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/sample/notifications/badges', name: 'Badges', component: Badges },
  { path: '/sample/notifications/modals', name: 'Modals', component: Modals },
  { path: '/sample/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/sample/widgets', name: 'Widgets', component: Widgets },
  { path: '/sample/users', exact: true,  name: 'Users', component: Users },
  { path: '/sample/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
