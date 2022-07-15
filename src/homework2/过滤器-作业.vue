<template>
    <div>
        <h2>使用同一个过滤器处理{{ fans }}粉丝量</h2>
        <div>国内粉丝量:{{ fans | handleFans('万') }}</div>
        <div>国外粉丝量:{{ fans | handleFans('千') }}</div>
        <h2>使用同一个过滤器处理{{ date }}时间戳</h2>
        <div>时间:{{ date | handleDate('YYYY-MM-DD') }}</div>
        <div>时间:{{ date | handleDate('YYYY/MM/DD') }}</div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            fans: 123488456,
            date: new Date().valueOf(),
        }
    },
    filters: {
        handleFans: (val, unit) => {
            return val + unit
        },
        handleDate: (date, format) => {
            return moment(date).format(format)
        },
    },
}
</script>

<style></style>
