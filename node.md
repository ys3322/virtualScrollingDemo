## 学习记录
> 2023年3月14日 11:46:27 
> 完成 item项高度固定的虚拟滚动.
1. 特点: 
如果上万条数据一次性渲染,那么浏览器需要处理的dom节点会巨多,浏览器会出现卡顿现象,影响用户体验.

2. 思考解决方案
用户只能在可视区域浏览内容,没必要把所有的大list全部渲染出来,考虑只渲染部分item,确定好子列表,只渲染子列表.
所有list数据并不是全部渲染,而是根据滚动的距离,动态计算出需要展示的子列表,只渲染子列表.

3. 核心
通过start end max等变量,维护好可视区域的子列表,只展示子列表. 减少浏览器处理DOM的数量,优化性能!

> 需要使用一个空的div标签来占位,div的高度是所有item项的高度总和. 创造真实的滚动环境!

- 监听dom滚动,处理scroll事件. 通过event.target.scrollHeight获取滚动的距离(上卷的距离).
- 计算滚动过去的item项个数 = 滚动的距离 / itemHeight;
- 处理 start end translateY等参数;  
  `start = count; end =  Math.min(start + this.max, listLength);`
  `translateY = scrolledCount * this.itemHeight;`

4. 注意 
这里的虚拟列表处理方案,是针对item项高度固定的情况