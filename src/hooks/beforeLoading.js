/**
 * UPDATES AND DOCS AT: https://github.com/dongzhanpeng/
 * https://www.cnblogs.com/IM-Fly
 * @author: Fly
 * ----------------------------------------------
 * @describe: loading 开始前
 */

export default function main(_) {
    if (typeof _.__config.hooks.beforeLoading === "function")
        _.__config.hooks.beforeLoading(_);
}