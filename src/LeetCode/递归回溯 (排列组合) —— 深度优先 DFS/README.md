
1、输入有重复元素 + 结果不可以无顺序重复
- 先 sort
- i > index && candidates[i] === candidates[i - 1] && candidates[i - 1]       i - 1 不重复


2、此方法只是单纯的防止输入重复元素 + 结果可以无顺序重复
- i > index && nums[i] === nums[i - 1] && !uses[i - 1]


3、防止单个元素重复 + 结果不可以无顺序重复（但如果输入有重复元素, 则此方法会失效, 所以要和 1 搭配使用）
- index


4、防止单个元素重复
- uses
