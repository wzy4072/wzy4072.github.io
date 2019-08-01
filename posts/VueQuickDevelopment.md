
### vue-router

```
 this.$router.push({ path: "/xxx",query: {} });
 this.$route.params.id
 this.$route.query.id
 <router-link :to="{path:'/XXX',query: {}}"></router-link>
```

### form rules

```
{ required: true, message: '', trigger: 'blur' }
{ validator: validFunction, trigger: "change" }
{ pattern: /[\S]/, message: "请输入有效字符串", trigger: "blur" }

```
### confirm
```
 this.$confirm("确认要XXX", "确认操作", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
        })
        .catch(() => {});

```
### dialog
```
<el-dialog :title="title" :visible.sync="isShow" width="30%">
    <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="">取 消</el-button>
        <el-button size="mini" type="primary" @click="">确 定</el-button>
    </span>
</el-dialog>

```

### fileTypes

```
 const types = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/pdf",
        "application/vnd.ms-excel",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ];

```