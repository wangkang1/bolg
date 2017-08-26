/**
 * 字符串模版
 * @param {string} template 
 * @param {object} context 
 * @example
 *      render("{greeting}! My name is { name }.",{greeting:"Hi", name:"hsfzxjy"});
 *      // Hi! My name is hsfzxjy.
 */
function render(template, context) {
    //被转义的的分隔符 { 和 } 不应该被渲染，分隔符与变量之间允许有空白字符
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function(word, slash1, token, slash2) {
        //如果有转义的\{或\}替换转义字符
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        // 切割 token ,实现级联的变量也可以展开
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            // 如果当前索引的对象不存在，则直接抛出异常。
            if (currentObject === undefined || currentObject === null) {
                throw new RangeError(`当前的索引对象不存在：${variable}`);
            }
        }
        return currentObject;
    })
}

export default {
    install: function(Vue, options) {
        String.prototype.tmpl = function(context) {
            return render(this, context);
        };
        Vue.prototype.$$tmpl = render;
    }
};