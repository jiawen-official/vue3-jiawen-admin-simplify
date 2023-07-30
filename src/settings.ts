/**
 * @param fixedHeader 是否固定header
 * @param sidebarLogo 是否显示侧边栏logo
 */
interface DefaultSettings {
  fixedHeader: boolean;
  sidebarLogo: boolean;
}

const defaultSettings: DefaultSettings = {
  fixedHeader: true,
  sidebarLogo: true
};

export default defaultSettings;
