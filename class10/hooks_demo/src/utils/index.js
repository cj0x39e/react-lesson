
const leadingZero = num => num.toLocaleString({}, { minimumIntegerDigits: 2 });

/**
 * 时间转换为字符串函数
 * @param {number} t 时间（毫秒）
 */
function formatTime(t = 0) {
    const msec = leadingZero(t % 100); // 0.1s
    const sec = leadingZero(parseInt((t / 100), 10) % 60); // 毫秒到秒
    const min = leadingZero(parseInt((t / 6000), 10) % 60); // 毫秒到分
    const hour = leadingZero(parseInt((t / 360000), 10)); // 毫秒到小时
    return `${hour}:${min}:${sec}.${msec}`;
}

export default {
    formatTime
};