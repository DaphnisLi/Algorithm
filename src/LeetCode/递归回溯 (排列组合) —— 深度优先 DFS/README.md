
1、输入有重复元素
- 先 sort
- i > index && candidates[i] === candidates[i - 1] && candidates[i - 1]       i - 1 不重复

2、防止单个元素重复 + 结果不可以无顺序重复
- index

3、防止单个元素重复
- uses

4、uses[i] 还是 uses[nums[i]]
如果允许重复的元素同时使用就用 uses[i], 如果不允许就 uses[nums[i]]
