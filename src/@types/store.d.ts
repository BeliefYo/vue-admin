// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouteRecordRaw } from 'vue-router'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare interface State {
  tab: Tab
  user: User
}

// declare interface App {
//   device: string
//   size: string
//   sidebar: {
//     opened: boolean
//     withoutAnimation: boolean
//   }
// }

// declare interface Permission {
//   // routes: RouteRecordRaw[]
//   // addRoutes: RouteRecordRaw[]
//   isChange: boolean
// }

// declare interface TagsView {
//   visitedViews: any[]
//   cachedViews: any[]
// }

// declare interface User {
//   token: string | undefined
//   // roles: string | undefined
//   name: string | undefined
//   avatar: string | undefined
//   introduction: string
// }
