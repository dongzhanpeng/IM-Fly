/**
 * UPDATES AND DOCS AT: https://github.com/dongzhanpeng/
 * https://www.cnblogs.com/IM-Fly
 * @author: Fly
 * ----------------------------------------------
 * @describe: loading 结束后
 */

export default function main(_) {
    if (typeof _.__config.hooks.afterLoading === "function")
        _.__config.hooks.afterLoading(_);
}