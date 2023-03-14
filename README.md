# virtual-scrolling-demo
### 学习记录
> 2023年3月14日 11:46:27 
> 完成 item项高度固定的虚拟滚动.
1. 特点: 
如果上万条数据一次性渲染,那么浏览器需要处理的dom节点会巨多,浏览器会出现卡顿现象,影响用户体验.

2. 思考解决方案
用户只能在可视区域浏览内容,没必要把所有的大list全部渲染出来,考虑只渲染部分item,确定好子列表,只渲染子列表.
所有list数据并不是全部渲染,而是根据滚动的距离,动态计算出需要展示的子列表,只渲染子列表.

3. 重点: 维护好可视区域的子列表,只展示子列表. 减少浏览器处理DOM的数量,优化性能!

4. 这里的虚拟列表处理方案,是针对item项高度固定的情况



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


