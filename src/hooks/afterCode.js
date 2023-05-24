/**
 * UPDATES AND DOCS AT: https://github.com/dongzhanpeng/
 * https://www.cnblogs.com/IM-Fly
 * @author: Fly
 * ----------------------------------------------
 * @describe: code 渲染结束后
 */

export default function main(_) {
    if (typeof _.__config.hooks.afterCode === "function")
        _.__config.hooks.afterCode(_);
}