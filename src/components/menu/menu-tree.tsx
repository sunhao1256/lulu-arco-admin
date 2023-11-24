import { MenuItem, SubMenu } from '@arco-design/web-vue';
import { compile, PropType } from 'vue';
import { useRouterPush } from '@/composables';

export default defineComponent({
  name: 'MenuTree',
  props: {
    menus: {
      type: Array as PropType<App.GlobalMenuOption[]>,
    },
  },
  setup(props) {
    const collapsed = ref(false);
    const { routerPush } = useRouterPush();
    const renderIcon = (menu: App.GlobalMenuOption) => {
      return menu.icon && h(compile(`<${menu.icon}/>`));
    };
    return {
      collapsed,
      routerPush,
      renderIcon,
    };
  },
  render() {
    return (
      <>
        {this.menus?.map((menu: App.GlobalMenuOption) => {
          return menu.children ? (
            <SubMenu
              key={menu.key}
              title={this.$t(menu.label)}
              v-slots={{
                icon: () => this.renderIcon(menu),
              }}
            >
              <menu-tree menus={menu.children}></menu-tree>
            </SubMenu>
          ) : (
            <MenuItem
              key={menu.key}
              v-slots={{
                icon: () => this.renderIcon(menu),
              }}
              onClick={() => this.routerPush(menu.routePath)}
            >
              {this.$t(menu.label)}
            </MenuItem>
          );
        })}
      </>
    );
  },
});
