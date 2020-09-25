- Object.defineProperty => Proxy
- VDom重构
>- 将模版基于动态节点指令切割为嵌套的区块
>- 每个区块内部的节点结构是固定的
>- 每个区块只需要以一个 Array 追踪自身包含的动态节点
>- vue3.0将 vdom 更新性能由与模版整体大小相关提升为与动态内容的数量相关


>- 支持多根节点组件，即片段
>- 移除过滤器api，filters，(建议使用计算属性和watch)
>- SFC(single file component) 单文件组件使用函数创建
>- createApp 全局创建一个实例
>- 全局 tree-shaking
>- 不再支持使用数字 (即键码) 作为 v-on 修饰符,不再支持 config.keyCodes
>- 过渡类名 v-enter 修改为 v-enter-from、过渡类名 v-leave 修改为 v-leave-from
>- 两者作用于同一个元素上时，v-if 会拥有比 v-for 更高的优先级。
