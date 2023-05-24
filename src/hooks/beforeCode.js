/**
 * UPDATES AND DOCS AT: https://github.com/dongzhanpeng/
 * https://www.cnblogs.com/IM-Fly
 * @author: Fly
 * ----------------------------------------------
 * @describe: code 渲染开始前
 */

export default function main(_) {
    if (typeof _.__config.hooks.beforeCode === "function")
        _.__config.hooks.beforeCode(_);
}