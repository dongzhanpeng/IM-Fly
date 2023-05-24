/**
 * UPDATES AND DOCS AT: https://github.com/dongzhanpeng/
 * https://www.cnblogs.com/IM-Fly
 * @author: Fly
 * ----------------------------------------------
 * @describe: 网站图标处理
 */

export default function main(_) {
    if (_.__config.info.blogIcon) {
        let shortcutIcon = $('link[rel="shortcut icon"]');
        if (shortcutIcon.length) {
            shortcutIcon.attr('href', _.__config.info.blogIcon);
        } else {
            let linkObject  = document.createElement('link');
            linkObject.rel  = "shortcut icon";
            linkObject.href = _.__config.info.blogIcon;
            document.getElementsByTagName("head")[0].appendChild(linkObject);
        }
    }
}