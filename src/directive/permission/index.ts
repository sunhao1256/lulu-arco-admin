import { DirectiveBinding } from 'vue';
import { usePermission } from '@/composables';

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const { hasPermission } = usePermission();
  if (Array.isArray(value)) {
    if (value.length > 0) {
      const permissionValues = value as Auth.RoleType | Auth.RoleType[];

      const has = hasPermission(permissionValues);
      if (!has && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','user']"`);
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
};
