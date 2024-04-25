/*
3. 请通过 React Hooks API 实现一个具有倒计时功能的自定义 Hook useCountdown，
要求可以每秒自动进行倒计时更新，其用法满足以下由 TypeScript 定义的 API 格式
*/

import React, { useEffect, useState } from 'react';

/**
 * @param {Number} seconds
 * @returns {Number} Countdown
 */
function useCountdown(seconds) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    let timeout;
    if (count > 0 && count <= 60) {
      timeout = setInterval(() => {
        setCount((pre) => pre - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [count]);

  return count;
}

export default function ({ seconds }) {
  const s = useCountdown(seconds);

  return <span>剩余时间：{s}</span>;
}
