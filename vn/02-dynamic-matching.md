# Dynamic Route Matching with Params

<VueSchoolLink
  href="https://vueschool.io/lessons/dynamic-routes"
  title="Learn about dynamic route matching with params"
/>

Rất thường xuyên chúng ta sẽ cần ánh xạ các routes đến cùng một thành phânf.Ví dụ chúng ta có component `User` được sử dụng để hiển thị tất cả các người dùng nhưng có IDs khác nhau. Trong Vue Router chúng ta có thể sử dụng dynamic segment (phân đoạn động) để thực hiện điều này, chúng ta gọi đó là param _param_:

```js
const User = {
  template: '<div>User</div>',
}

// Những thông tin này chuyển cho `createRouter`
const routes = [
  // dynamic segments bắt đầu bằng dấu ":"
  { path: '/users/:id', component: User },
]
```

Hiện tại URLs sẽ trông thế này `/users/johnny` và `/users/jolyne` cả 2 sẽ cùng ánh xạ đến một route.

Một _param_ được hiển thị bằng dấu `:`. Khi một route trùng khớp, giá trị cho _params_ sẽ được giữ trong `this.$route.params` trong tất cả các component.
Do đó chúng ta có thể hiện thị tất cả các User ID thông qua `User` template cho nó:

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
}
```

Bạn có thể có nhiềy _params_ trong một route, và chúng sẽ ánh xạ đến các trường tương ứng trong `$route.params`. Ví dụ:

| pattern                        | matched path             | \$route.params                           |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /users/:username               | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

Ngoài `$route.params`, đói tượng `$route` cũng hiển thị được các thông tin khác như `$route.query` (nếu có truy vấn trong URL), `$route.hash`, ....bạn có thể xem tài liệu chi tiết trong `API Reference: ../../api/#routelocationnormalized`.

Xem một demo ở: https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&initialpath=%2Fusers%2Feduardo%2Fposts%2F1

## Reacting to Params Changes

<VueSchoolLink
  href="https://vueschool.io/lessons/reacting-to-param-changes"
  title="Learn how to react to param changes"
/>

Khi thay đổi các params thì component sẽ được tái sử dụng lại, do đó sẽ không thực hiện xóa và tạo lại component từ đó các hàm thuộc lifecycle hooks của Vue sẽ không được gọi lại.

Để có hành động với việc thay đổi tham số trong cùng một component, bạn chỉ cần xem bất cứ điều gì thay đổi trên đối tượng `$route`, ở trường hợp sau là `$route.param`:

```js
const User = {
  template: '...',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // react to route changes...
      }
    )
  },
}
```

Hoặc, sử dụng `beforeRouteUpdate` (navigation guard :../advanced/navigation-guards.md), cũng cho phép hủy điều hướng:

```js
const User = {
  template: '...',
  async beforeRouteUpdate(to, from) {
    // react to route changes...
    this.userData = await fetchUser(to.params.id)
  },
}
```

## Catch all / 404 Not found Route

Các tham số thông thường sẽ chỉ khớp các ký tự ở giữa các đoạn url, được phân tách bằng /. Nếu chúng ta muốn khớp với bất kỳ thứ gì, chúng ta có thể sử dụng regexp param tùy chỉnh bằng cách thêm regexp bên trong dấu ngoặc đơn ngay sau param:

```js
const routes = [
  // sẽ khớp mọi thứ và đặt nó dưới `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // sẽ phù hợp với bất cứ điều gì bắt đầu với `/user-` và đặt nó theo `$ route.params.afteruser`
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
```

Trong trường hợp cụ thể này, chúng tôi đang sử dụng regexp tùy chỉnh giữa các dấu ngoặc đơn và đánh dấu tham số `pathMatch` là có thể lặp lại tùy chọn. Điều này cho phép chúng tôi điều hướng trực tiếp đến route nếu chúng tôi cần bằng cách tách `path` thành một mảng:

```js
this.$router.push({
  name: 'NotFound',
  // Giữ nguyên đường dẫn hiện tại và xóa char đầu tiên để tránh URL đích bắt đầu bằng '//'
  params: { pathMatch: this.$route.path.substring(1).split('/') },
  // Giữ nguyên query và hash
  query: this.$route.query,
  hash: this.$route.hash,
})
```

Xem thêm trong: `repeated params: ./route-matching-syntax.md#repeatable-params`.

Nếu bạn đang sử dụng History mode hãy đảm bảo làm theo các hướng dẫn để địn cấu hình chính xác.

## Các mẫu matching nâng cao

Bộ định tuyến Vue sử dụng cú pháp khớp đường dẫn riêng của mình, lấy cảm hứng từ mô hình được sử dụng bởi Express, do đó, nó hỗ trợ nhiều mẫu phù hợp nâng cao như tham số tùy chọn, không hoặc nhiều / một hoặc nhiều yêu cầu và thậm chí các mẫu regex tùy chỉnh. Vui lòng kiểm tra tài liệu `Advanced Matching`: để khám phá chúng.
