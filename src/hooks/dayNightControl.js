/**
 * UPDATES AND DOCS AT: https://github.com/dongzhanpeng/
 * https://www.cnblogs.com/IM-Fly
 * @author: Fly
 * ----------------------------------------------
 * @describe: 日夜间模式切换时
 */

export default function main(_, type) {
    if (typeof _.__config.hooks.dayNightControl === "function")
        _.__config.hooks.dayNightControl(_, type);
}