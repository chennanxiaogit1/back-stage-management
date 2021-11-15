import type { App } from 'vue'

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElAside,
  ElTabs,
  ElIcon,
  ElTabPane,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElHeader,
  ElMain,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElTooltip
} from 'element-plus'
import 'element-plus/dist/index.css'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElAside,
  ElTabs,
  ElIcon,
  ElTabPane,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElTooltip
]

export default function (app: App): void {
  components.forEach((component) => {
    // app.component(component.name, component)
    app.use(component)
  })
}
