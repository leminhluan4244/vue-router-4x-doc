# Getting Started

Tạo một ứng dụng SPA với Vue và Vue Router cảm thấy tự nhiên: Với Vue.js, trong Vuejs chúng tôi đã tạo ra ứng dụng của mình với các Component. Khi thêm Vue Route vào mix, tất cả những gì chúng ta cần làm là map các component của chúng ta vào các routes và cho Vue Router biết nơi để hiển thị chúng. Đây là một ví dụ cơ bản:

## HTML

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>
```

### `router-link`

Thay vì sử dụng thẻ `a`, Vue Router sử dụng `router-link` để tạo các liên kết. Điều này cho phép Vue Router thay đổi URL mà không tải lại trang, xử lý việc tạo URL cũng như mã hóa. Chúng ta sẽ thấy sau này làm thế nào để hưởng lợi từ các tính năng này.

### `router-view`

`router-view` sẽ hiển thị component tương ứng với URL. Bạn có thể đặt nó ở bất cứ đâu để điều chỉnh nó cho phù hợp với layout của bạn.

## JavaScript

```js
// 1. Define các route component.
// Chúng có thể được import từ các tệp khác
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Mỗi route sẽ ánh xạ đến một component.
// Chúng ta sẽ nói về các route lồng nhau sau (nested routes)
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Tạo đối tượng Router and vượt qua các tùy chọn `routes`
// Bạn có thể thêm các tùy chọn khác tại đây, nhưng hiện tại hãy tạo các mục đơn giản
const router = VueRouter.createRouter({
  // 4. Cung cấp history implementation để sử dụng. Ở mục hiện tại tại đang sử dụng hash history (lịch sử băm).
  // Ngoài createWebHashHistory thì vẫn có các tùy chọn khác
  history: VueRouter.createWebHashHistory(),
  routes, // viết tắt cho `routes: routes`
})

// 5. Tạo và gắn kết (mount) vào đối tượng gốc
const app = Vue.createApp({})
// Đảm bảo app.use có sử dụng đối tượng route làm đối tượng toàn cục.
app.use(router)

app.mount('#app')

// Hiện tại app đã có thể hoạt động
```

Bằng cách gọi `app.use(router)`, chúng ta có thể truy cập thông qua `this.$router` , hoặc truy cập vào route hiện tại thông qua `this.$route` bên trong bất kỳ component nào:

```js
// Home.vue
export default {
  computed: {
    username() {
      // Chúng ta có thể xem được `params`
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
```

Để truy cập được router hoặc route bên trong chức năng`setup`, chỉ cần gọi hàm `useRouter` hoặc `useRoute`. Chúng ta sẽ xem nhiều hơn về nó trong `the Composition API`: `./advanced/composition-api.md#accessing-the-router-and-current-route-inside-setup`

Trong xuyên suốt tài liệu, chúng tôi sử dụng khải niệm `router` instance. Hãy nhớ răng `this.$router` giống như bạn sử dụng đối tượng `router` được tạo thông qua hàm `createRouter`. Lý do sử dụng `this.$router` là vì chúng tôi không muốn phải import router trong mỗi component mà chúng tôi muốn sử dụng route.
