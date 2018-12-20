/*
 * @Description: 定义常用的过滤器
 */

// 0 => 否  1 => 是
export const yesNo = (value, yesContent, noContent) => (value ? yesContent || '是' : noContent ||'否');

// 调整百分比
export const percent = value => (value ? `${value * 100}%` : '');

// 货币格式化
export const currency = (value, suffix) => {
    if (isNaN(value) || value === undefined){
        return '';
    }
    if (value === 0) {
        return 0;
    }
    let keep;
    if (suffix == 0) {
        keep = 0;
    } else {
        keep = suffix || 2;
    }
    value = value/1;
    value = `${(Math.round(value * Math.pow(10, keep)) / Math.pow(10, keep)).toFixed(keep)}`; // 保留两位小数
    if(value > 0) {
        value = value.replace(/^(\d+)((\.\d+)?)$/, (v1, v2, v3) => v2.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + (v3 || (keep > 0 ? '.00' : '')));
    } else { //负数的时候格式化错误修复
        value = value.replace(/(\d{1,3})(?=(?:\d{3})+\.?)/g, '$1,');
    }
    return value;
};

